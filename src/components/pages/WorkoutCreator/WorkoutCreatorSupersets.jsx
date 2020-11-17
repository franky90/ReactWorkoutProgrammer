import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import {WorkoutTable} from "./../WorkoutTable"
import { regularExerciseCollection } from './../data/workoutTableData'
import WorkoutCreatorOptions from "./WorkoutCreatorOptions"

class WorkoutCreatorSupersets extends React.Component{
  constructor(){
    super()
  }

  render(){
    
    
    return (

        <div className="workout-creator-container">
        <div className="trainings-menu-heading">
                <h1>SUPERSETS</h1>
            </div>

    <WorkoutCreatorOptions
    isSuperset = "true"
    trainingTypeHeading = "What is Super set"
    trainingTypeDescription ="At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets.
                              'It increases the intensity of the workout while reducing the time it takes to execute the program,' says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals."
    />
    
    <WorkoutTable data={regularExerciseCollection}/>

</div>
    )
    
}
}
export default WorkoutCreatorSupersets;