import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import ShuffleButton from "./ShuffleButton"


class ExerciseRow extends React.Component{

  constructor({buttonName, order, exerciseName, sets, reps, rest, weight}) {
        super();
      }
    

    render(){

    return(
        <>
        <Tr className="exercise-row">
        <Td ><ShuffleButton /></Td>
          <Td>{order}</Td>
          <Td>{exerciseName}</Td>
          <Td>{sets}</Td>
          <Td>{reps}</Td>
          <Td>{rest}</Td>
          <Td>{weight}</Td>
        </Tr>

        </>
    
    )
};
}
export default ExerciseRow;