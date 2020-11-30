import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export const GroupingProblemPage = () => {

    const [exerciseCount, setExerciseCount] = useState({
        'Military Press Barbell': 3
    })
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