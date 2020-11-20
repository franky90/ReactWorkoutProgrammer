import React from 'react'
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "./WorkoutCreator/WorkoutCreator.css"
import { WorkoutTableRow } from './WorkoutTableRow'


export class WorkoutTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { data, isSuperset, isReadOnly, SuperSetSize } = this.props
    let tableContent = null;
    if (Array.isArray(data) && data.length > 0) {
      tableContent = (
        <Table>
          <Thead>
            <Tr>
              <Th className="exercise-heading">Muscle Group</Th>
              <Th className="exercise-heading">Order</Th>
              <Th className="exercise-heading">Exercise</Th>
              <Th className="exercise-heading">Sets</Th>
              <Th className="exercise-heading">Reps</Th>
              <Th className="exercise-heading">Rest</Th>
              <Th className="exercise-heading">Weight</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((exerciseObjectReference, index) => <WorkoutTableRow key={exerciseObjectReference.title} {...exerciseObjectReference} order={index + 1} isReadOnly={isReadOnly} isSuperSet={isSuperset} SuperSetSize={SuperSetSize}/>)}
          </Tbody>
        </Table>
      );
    }

   
    


    return <div className="workout-creator-container">{tableContent}</div>

  }
}