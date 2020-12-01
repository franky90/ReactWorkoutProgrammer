import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export const GroupingProblemPage = () => {

    const [exerciseCount, setExerciseCount] = useState({
        'Military Press Barbell': 3
    })
    useEffect(() => {
        Axios.get('http://localhost:5000/Exercise/allExercises').then((exerciseCollection) => {
            const data = exerciseCollection.data.allExercises
            if(Array.isArray(data) && data.length > 0) {
                const Mapping = {}
                data.forEach(exercise => {
                    const name = exercise.name
                    if(Mapping[name]) Mapping[name]++ 
                    else Mapping[name] = 1
                })
                setExerciseCount(Mapping)
            }
        }).catch((axiosError) => {
            console.log(axiosError)
        })
    },
    [])


    const loopOverObject = () => {
        const JSXElementCollection = []
        for(let _exercise in exerciseCount) JSXElementCollection.push(<div key={_exercise}><h1>{_exercise}: <span style={{color: "crimson"}}>{exerciseCount[_exercise]}</span></h1></div>)
        return JSXElementCollection
    }


    return <div>
        {loopOverObject()}
    </div>
}