import React, { useEffect, useState } from 'react'
import Welcome from "./../Welcome";
import Info from "./../Info";
import Exercise from "./../Exercise";
// getting this from the server now!
import exerciseList from "./../../exerciseList";
import "./../../components/Home.css"
// import { WorkoutAPI } from './../../Service/WorkoutAPI'

const Home = () => {
    const createExerciseBox = passedExerciseList =>  <Exercise key={passedExerciseList.exerciseName} {...passedExerciseList}/>
    return(<>
            <Welcome />
            <Info />
            <div className = "main-container-exercise"> 
                {exerciseList.map(createExerciseBox)}; 
            </div>
        </>)
}

export default Home