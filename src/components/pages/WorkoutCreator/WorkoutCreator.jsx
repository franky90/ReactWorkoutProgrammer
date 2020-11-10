import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"

import ExerciseRow from "../../ExerciseRow"

class WorkoutCreator extends React.Component{

 
  render(){

    const exerciseList= [
      {
        buttonName: "Shoulders",
        order: "1",
        exerciseName: "Dumbbell Shoulder Press",
        sets: "3",
        reps: "10",
        rest: "90s",
        weight: "70%RM"
      },
    ]


  return(
        <div className="workout-creator-container">
    <Table>
      <Thead>
        <Tr>
        <Th className="exercise-heading">Button</Th>
          <Th className="exercise-heading">Order</Th>
          <Th className="exercise-heading">Exercise</Th>
          <Th className="exercise-heading">Sets</Th>
          <Th className="exercise-heading">Reps</Th>
          <Th className="exercise-heading">Rest</Th>
          <Th className="exercise-heading">Weight</Th>
        </Tr>
      </Thead>
      <Tbody>
      {exerciseList.map(({buttonName, order, exerciseName, sets, reps, rest, weight})=>{
       return(
         <ExerciseRow buttonName={buttonName} exerciseName={exerciseName} order={order} sets={sets} reps={reps} rest={rest} weight={weight}/> 
         )})}
      </Tbody>
    </Table>
</div>
    
    )
}
}
export default WorkoutCreator;