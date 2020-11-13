import React from "react";
import Welcome from "./../Welcome";
import Info from "./../Info";
import Exercise from "./../Exercise";
import exerciseList from "./data/exerciseList"
import "./../../components/Home.css";
// import { WorkoutAPI } from './../../Service/WorkoutAPI'

const Home = () => (
  <>
    <Welcome />
    <Info />
    {/* 
    <div className="main-container-exercise">
      {exerciseList.map((passedExerciseList) => (<Exercise key={passedExerciseList.exerciseName} {...passedExerciseList}/>))}
    </div>
    */}
  </>
);

export default Home;
