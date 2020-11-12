import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import {WorkoutTable} from "../WorkoutTable"

// const exerciseList= [
//   {
//     id: '1',
//     muscleGroup: "Shoulders",
//     exerciseName: "Dumbbell Shoulder Press",
//     sets: "3",
//     reps: "10",
//     rest: "90s",
//     weight: "70%RM"
//   },
//   {
//     id: '2',
//     muscleGroup: "Shoulders",
//     exerciseName: "Dumbbell Shoulder Press upside down",
//     sets: "3",
//     reps: "10",
//     rest: "90s",
//     weight: "70%RM"
//   },
//   {
//     id: '3',
//     muscleGroup: "Chest",
//     exerciseName: "Dumbbell Shoulder Press upside down",
//     sets: "3",
//     reps: "10",
//     rest: "90s",
//     weight: "70%RM"
//   },
  
// ]



class WorkoutCreator extends React.Component{
 
  render(){
    
  return(
        <div className="workout-creator-container">
        <div className="manage-exercises-container">
        
        <label for="exercises">New Exercise</label>
          <select name="exercises" id="exercises">
          <option value="choose"> ---MUSCLE GROUP--- </option>
          <option value="shoulders"> Shoulders </option>
          <option value="chest"> Chest </option>
          <option value="legs"> Legs </option>
          <option value="back"> Back </option>
          <option value="abs"> ABS </option>

        </select>
        
         <button className="add-exercise-button" type="button">Add</button>
        </div>
    
    <WorkoutTable />

</div>
    
    )
}
}
export default WorkoutCreator;