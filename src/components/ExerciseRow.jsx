import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Tr, Td } from "react-super-responsive-table";
import ShuffleButton from "./ShuffleButton";

class ExerciseRow extends React.Component {
  constructor(props) {
    super(props)
    debugger
    const index = 0
    const { groupItems } = this.props
    const { name, sets, reps, rest, weight } = groupItems[index]
    this.state = {
      name, 
      sets, 
      reps, 
      rest, 
      weight,
      groupItems,
      index
    }
  }

  ShuffleButtonClicked = () => {
    const groupItemsLength = this.state.groupItems.length
    const index = (this.state.index + 1) % groupItemsLength
    const groupItemsCopy = this.state.groupItems.slice()
    const newItems = groupItemsCopy[index]
    this.setState({...newItems, index })
  }

  render() {
    const { name, sets, reps, rest, weight } = this.state
    return (
      <Tr className="exercise-row">
        <Td onClick={this.ShuffleButtonClicked}>
          <ShuffleButton muscleGroup={this.props.muscleGroup}/>
        </Td>
        <Td>{this.props.order}</Td>
        <Td>{name}</Td>
        <Td>{sets}</Td>
        <Td>{reps}</Td>
        <Td>{rest}</Td>
        <Td>{weight}</Td>
      </Tr>
    )
  }
}

export default ExerciseRow;