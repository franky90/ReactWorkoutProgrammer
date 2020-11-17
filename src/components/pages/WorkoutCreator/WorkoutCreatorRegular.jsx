import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import { WorkoutTable } from "./../WorkoutTable"
import { regularExerciseCollection } from './../data/workoutTableData'
import WorkoutCreatorOptions from "./WorkoutCreatorOptions"

class WorkoutCreatorRegular extends React.Component {
  constructor() {
    super()
  }

  render() {


    return (

      <div className="workout-creator-container">
        <div className="trainings-menu-heading">
          <h1>REGULAR</h1>
        </div>

        <WorkoutCreatorOptions
          trainingTypeHeading="What is Regular Training "
          trainingTypeDescription="This is descriptio about regular training. Why is it good ? What benefits can you achive ?"
        />

        <WorkoutTable data={regularExerciseCollection} />

      </div>
    )

  }
}
export default WorkoutCreatorRegular;