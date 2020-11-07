import React, { useEffect, useState } from 'react'
import Welcome from "./../Welcome";
import Info from "./../Info";
import Exercise from "./../Exercise";
// getting this from the server now!
// import exerciseList from "./../../exerciseList";
import "./../../components/Home.css"
import { WorkoutAPI } from './../../Service/WorkoutAPI'

const Home = () => {

    const [exerciseList, setExerciseList] = useState([])

    useEffect(() => {
        WorkoutAPI.getExerciseCollection().then((goodAxiosResponse) => {
            if(goodAxiosResponse && goodAxiosResponse.data && Array.isArray(goodAxiosResponse.data.exerciseList)) {
                setExerciseList(goodAxiosResponse.data.exerciseList)
            }
        }).catch((axiosError) => {
        })
    }, [])

    const createExerciseBox = passedExerciseList =>  <Exercise {...passedExerciseList}/>    
    
    return(<>
            <Welcome />
            <Info />
            <div className = "main-container-exercise"> 
                {exerciseList.map(createExerciseBox)}; 
            </div>
        </>)
}

export default Home