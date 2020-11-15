import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import {WorkoutTable} from "../WorkoutTable"


class WorkoutCreatorRegular extends React.Component{
 
  render(){
    
  return(
        <div className="workout-creator-container">
        <div className="trainings-menu-heading">
                <h1>Workout Creator</h1>
            </div>

        <div className="workout-creator-container-options">
        <div className="workout-creator-container-selectedType">
        
        <label for="muscle-group">Selected Training Type</label>
          <select name="muscle-group" id="muscle-group">
          <option value="regular"> Regular </option>
          <option value="super-sets"> Super sets </option>
          <option value="giant-sets"> Giant sets </option>
          <option value="drop-sets"> Drop sets</option>
          </select>
          <button className="add-type-button" type="button">Change</button>
        </div>

        <div className="workout-creator-container-typeDescription">
        <div className="typeDescription-heading">
        What is Super set ?
        </div>
        <div className="typeDescription-content">
        At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets.
 "It increases the intensity of the workout while reducing the time it takes to execute the program," says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals.
        </div>
        </div>
        </div>
    
    <WorkoutTable />

</div>
    
    )
}
}
export default WorkoutCreatorRegular;