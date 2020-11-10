import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import ShuffleButton from "./ShuffleButton";

class ExerciseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  ShuffleButtonClicked = () => {
    alert(`button with id of ${this.props.id} got clicked!`)
  }

  render() {
    const { buttonName, order, exerciseName, sets, reps, rest, weight, id } = this.props
    return (
      <Tr className="exercise-row">
        <Td>
          <ShuffleButton ShuffleButtonClicked={this.ShuffleButtonClicked}/>
        </Td>
        <Td>{order}</Td>
        <Td>{exerciseName}</Td>
        <Td>{sets}</Td>
        <Td>{reps}</Td>
        <Td>{rest}</Td>
        <Td>{weight}</Td>
      </Tr>
    );
  }
}
export default ExerciseRow;
