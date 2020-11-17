import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import {WorkoutTable} from "./../WorkoutTable"
import { regularExerciseCollection } from './../data/workoutTableData'
import WorkoutCreatorOptions from "./WorkoutCreatorOptions"

class WorkoutCreatorRegular extends React.Component{
  constructor(){
    super()

    this.state = {
      isWarmupChecked: false
    };

  }

  warmupCheckboxHandle = () =>{
      this.setState({
        isWarmupChecked: !this.isWarmupChecked
        })
    }


  render(){
    
    
    return (

        <div className="workout-creator-container">
        <div className="trainings-menu-heading">
                <h1>Workout Creator</h1>
            </div>

    <WorkoutCreatorOptions />
    
    <WorkoutTable data={regularExerciseCollection}/>

</div>
    )
    
}
}
export default WorkoutCreatorRegular;