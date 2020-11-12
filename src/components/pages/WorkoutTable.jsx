import React from 'react'
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./WorkoutCreator/WorkoutCreator.css";
import { WorkoutTableRow } from './WorkoutTableRow'

export class WorkoutTable extends React.Component {
  constructor(props) {
    super(props);
    const Shoulders = {
        title: "Shoulders",
        exercise: [
            {
                name: "Shoulders",
                sets: 3,
                reps: {
                    small: 10,
                    large: 20,
                    type: 'numeric-multiple'
                },
                rest: 90,
                weight: {
                    value: 70,
                    type: 'numeric'
                }
            },
            {
                name: "Shoulders 2 intense",
                sets: 3,
                reps: {
                    small: 12,
                    large: 20,
                    type: 'numeric-multiple'
                },
                rest: 30,
                weight: {
                    value: 75,
                    type: 'numeric'
                }
            }
        ]
    }
    const Legs = {
        title: "Legs",
        exercise: [
            {
                name: "Back squat",
                sets: 3,
                reps: {
                    value: 10,
                    type: 'numeric'
                },
                rest: 90,
                weight: {
                    value: 70,
                    type: 'numeric'
                }
            },
            {
                name: "Goblet squat",
                sets: 4,
                reps: {
                    value: 12,
                    type: 'numeric'
                },
                rest: 30,
                weight: {
                    small: 50,
                    large: 60,
                    type: 'numeric-weight-multiple'
                }
            }
        ]
    }
    const exerciseCollection = [Shoulders,Legs]

    this.state = {
      exerciseCollection,
      isSuperSet: false
    };
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