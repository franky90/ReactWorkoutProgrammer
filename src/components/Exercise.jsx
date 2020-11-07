import React from "react";
import ButtonExercise from "./ButtonExercise";
/*
import Order from "./Order";
import ExerciseName from "./ExerciseName";
import Sets from "./Sets";
import Reps from "./Reps";
import Rest from "./Rest";
import Weight from "./Weight";
*/
import "../components/Exercise.css"
// button={exerciseList.button}
// order={exerciseList.order}
// exerciseName={exerciseList.exerciseName}
// sets={exerciseList.sets}
// reps={exerciseList.reps}
// rest={exerciseList.rest}
// weight={exerciseList.weight}


function Exercise(props){
    return(
    <div className="main-exercise-container">
        <div className="exercise-container part-one">
        <div><ButtonExercise /></div>
        <div>{props.order}</div>
        <div>{props.exerciseName}</div>
        </div>
        <div className="exercise-container part-two">
        <div>{props.sets}</div>
        <div>{props.reps}</div>
        <div>{props.rest}</div>
        <div>{props.weight}</div>
        </div>
    </div>
    )
};

export default Exercise;


{/* <div><Button /></div>
<div><Order /></div>
<div><ExerciseName /></div>
<div><Sets /></div>
<div><Reps /></div>
<div><Rest /></div>
<div><Weight /></div> */}