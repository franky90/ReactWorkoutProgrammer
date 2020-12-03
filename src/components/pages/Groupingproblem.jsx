import React, { useEffect, useState } from 'react'
import Axios from 'axios'


export const GroupingProblemPage = () => {

    const [exerciseCount, setExerciseCount] = useState()

    const _setExerciseCount = ArrayReference => {
        if(ArrayReference && Array.isArray(ArrayReference)) {
            return ArrayReference.reduce((accumulator, exercise) => {
                let name =  exercise.name
                if (accumulator[name]) accumulator[name]++
                else accumulator[name] = 1
                return accumulator
            },{})
        }
    }


    useEffect(() => {
        Axios.get('http://localhost:5000/Exercise/allExercises').then((successfulResponse) => {

            if(
                successfulResponse // is this an object?
                && successfulResponse.data // is this an object?
                && successfulResponse.data.allExercises // is this an Array?
            ) {
                // save the Array in this variable titled "data"
                const data = successfulResponse.data.allExercises
                if(Array.isArray(data) && data.length > 0) {
                    const emptyObject = {}
                    data.forEach(element => {
                        let name = element.name// this is going to be a string
                        if(emptyObject[name]) emptyObject[name]++
                        else emptyObject[name] = 1//Count for that Object
                    })

                    setExerciseCount(emptyObject)

                }
            }
        }).catch((axiosError) => {
            console.log(axiosError)
        })
    },
    [])


    const loopOverObject = () => {
        const JSXElementCollection = []

        for(let _exercise in exerciseCount) 
            JSXElementCollection.push(<div key={_exercise}><h1>{_exercise}: <span style={{color: "crimson"}}>{exerciseCount[_exercise]}</span></h1></div>)

        return JSXElementCollection
    }

    const toNameCollection = stringRef => <div key={stringRef} className="person">{stringRef}</div>

    const newToolForPeter = () => {
        const Us = ["Alice", "Peter", "Felipe"]
        return Us.map(toNameCollection)
    }


    return <div>
        {loopOverObject()}
        {newToolForPeter()}
    </div>
}