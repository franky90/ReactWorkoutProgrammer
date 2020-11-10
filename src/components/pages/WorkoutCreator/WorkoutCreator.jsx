import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"

export default function WorkoutCreator(){
    return(
        <div className="workout-creator-container">
    <Table>
      <Thead>
        <Tr>
          <Th className="exercise-heading">Order</Th>
          <Th>Exercise</Th>
          <Th>Sets</Th>
          <Th>Reps</Th>
          <Th>Rest</Th>
          <Th>Weight</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="exercise-row">
          <Td>1</Td>
          <Td>Bench Press </Td>
          <Td>3</Td>
          <Td>12</Td>
          <Td>90sec</Td>
          <Td>70% RM</Td>
        </Tr>
        <Tr className="exercise-row">
          <Td>2</Td>
          <Td>Pull ups</Td>
          <Td>3</Td>
          <Td>12</Td>
          <Td>90sec</Td>
          <Td>70% RM</Td>
        </Tr>
        <Tr className="exercise-row">
          <Td>3</Td>
          <Td>Crunches</Td>
          <Td>3</Td>
          <Td>12</Td>
          <Td>90sec</Td>
          <Td>70% RM</Td>
        </Tr>
      </Tbody>
    </Table>
</div>
    
    )
}