import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

export default function WorkoutCreator(){
    return(
        <div className="workout-creator-container">
    <Table>
      <Thead>
        <Tr>
          <Th>Order</Th>
          <Th>Exercise</Th>
          <Th>Sets</Th>
          <Th>Reps</Th>
          <Th>Rest</Th>
          <Th>Weight</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table>
</div>
    
    )
}