import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"

import ExerciseRow from "../../ExerciseRow"

const exerciseList= [
  {
    id: '1',
    muscleGroup: "Shoulders",
    
    exerciseName: "Dumbbell Shoulder Press",
    sets: "3",
    reps: "10",
    rest: "90s",
    weight: "70%RM"
  },
  {
    id: '2',
    muscleGroup: "Shoulders",
    
    exerciseName: "Dumbbell Shoulder Press upside down",
    sets: "3",
    reps: "10",
    rest: "90s",
    weight: "70%RM"
  },
  {
    id: '3',
    muscleGroup: "Chest",
    
    exerciseName: "Dumbbell Shoulder Press upside down",
    sets: "3",
    reps: "10",
    rest: "90s",
    weight: "70%RM"
  },
  
]



class WorkoutCreator extends React.Component{
  // constructor(){
  //   super()
  // this.state= exerciseList;
  // }
  

  render(){
    
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
      {exerciseList.map(({id, muscleGroup, exerciseName, sets, reps, rest, weight})=>
        (<ExerciseRow id={id} muscleGroup={muscleGroup} exerciseName={exerciseName} sets={sets} reps={reps} rest={rest} weight={weight} />)
      )}
      </Tbody>
    </Table>
</div>
    
    )
}
}
export default WorkoutCreator;