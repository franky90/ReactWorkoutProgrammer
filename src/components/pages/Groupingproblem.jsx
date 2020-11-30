import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {allExercises} from "./data/workoutTableData"

export const GroupingProblemPage = () => {

    const [exerciseCount, setExerciseCount] = useState(
        {
        'Military Press Barbell': 3
        }
    )

    const setExerciseCount= () =>{
        {
        //   posortowac je zeby itemy o tej samej nazwie byly obok siebie  
        allExercises.sort() // so it suppose to sort them in ascending way 
            for (let i=0; i<allExercises.length; i++){
               
                if (allExercises[i] === allExercises[i+1]){
                if (allExercises[i]){
                    allExercises[i].push(allExercises[i])
                }
                // push to array with it's name or ...
                //create new array or if it exists use one
                }
            }
            
        }
    }


    useEffect(() => {
        Axios.get('http://localhost:5000/Exercise/allExercises').then((exerciseCollection) => {
            debugger
            console.log(exerciseCollection)
            // Peter writes code here!
            // setExerciseCount(exerciseCollection)
        }).catch((axiosError) => {
            debugger
            console.log(axiosError)
        })
    },
    [])


    return <h1>{JSON.stringify(exerciseCount, null, 2)}</h1>
}