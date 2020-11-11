import React from "react";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./WorkoutCreator.css";
import { MuscleGroup } from './MuscleGroup'

import ExerciseRow from "./../../ExerciseRow";

export class Range {
  constructor(small, large){
    this.small = small
    this.large = large
  }
  format() {
    return `${this.small}-${this.large}`
  }
}

export class WeightRange extends Range {
  constructor(small, large){
    super(small, large)
  }
  format() {
    return `${this.small}-${this.large}%RM`
  }
}


class WorkoutCreator extends React.Component {
  constructor(props) {
    super(props);

    const ShouldersMuscleGroup = new MuscleGroup({ muscleGroup: "Shoulders" })
    .withGroupItem({
      name: "Shoulders",
      sets: 3,
      reps: new Range(10,20),
      rest: 90,
      weight: 70,
    })
    .withGroupItem({
      name: "Shoulders 2 intense",
      sets: 3,
      reps: new Range(15,20),
      rest: 30,
      weight: 75,
    });

  const LegMuscleGroup = new MuscleGroup({ muscleGroup: "Legs" })
    .withGroupItem({
      name: "Back squat",
      sets: 3,
      reps: 10,
      rest: 90,
      weight: new WeightRange(50,60),
    })
    .withGroupItem({
      name: "Goblet squat",
      sets: 4,
      reps: 12,
      rest: 45,
      weight: new WeightRange(50,60)
    });

  const exerciseCollection = [ShouldersMuscleGroup, LegMuscleGroup];
    this.state = {
      exerciseCollection
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
            {this.state.exerciseCollection.map(
              (exerciseObjectReference, index) => (<ExerciseRow key={exerciseObjectReference.muscleGroup} {...exerciseObjectReference} order={index + 1} isReadOnly={false}/>)
            )}
          </Tbody>
        </Table>
      );
    }

    return <div className="workout-creator-container">{tableContent}</div>;
  }
}
export default WorkoutCreator;
