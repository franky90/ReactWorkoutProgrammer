import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import { WorkoutTable } from "./../WorkoutTable"
import { regularExerciseCollection } from './../data/workoutTableData'
import WorkoutCreatorOptions from "./WorkoutCreatorOptions"

class WorkoutCreatorGiantsets extends React.Component {
  constructor() {
    super()
  }

  render() {


    return (

      <div className="workout-creator-container">
        <div className="trainings-menu-heading">
          <h1>GIANTSETS</h1>
        </div>

        <WorkoutCreatorOptions
          trainingTypeHeading="What is Giant set"
          trainingTypeDescription="Giant set is when set of exercise contains 3 or more exercises. "
        />

        <WorkoutTable data={regularExerciseCollection} />

      </div>
    )

  }
}
export default WorkoutCreatorGiantsets;