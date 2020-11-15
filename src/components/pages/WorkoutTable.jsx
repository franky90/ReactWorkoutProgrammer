import React from 'react'
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "./WorkoutCreator/WorkoutCreator.css"
import { WorkoutTableRow } from './WorkoutTableRow'


export class WorkoutTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseCollection: this.props.data,
      isSuperSet: true
    }
  }

  render() {
    let tableContent = null;
    if (Array.isArray(this.state.exerciseCollection) && this.state.exerciseCollection.length > 0) {
      tableContent = (
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
            {this.state.exerciseCollection.map((exerciseObjectReference, index) => (<WorkoutTableRow key={exerciseObjectReference.title} {...exerciseObjectReference} order={index + 1} isReadOnly={false} isSuperSet={this.state.isSuperSet} />))}
          </Tbody>
        </Table>
      );
    }

    return <div className="workout-creator-container">{tableContent}</div>

  }
}