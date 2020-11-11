import React from "react"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./ShuffleButton"
import { Range } from './../components/pages/WorkoutCreator/WorkoutCreator'

class ExerciseRow extends React.Component {
  constructor(props) {
    super(props)
    const index = 0// by default we are the first index
    const { groupItems } = this.props
    const { name, sets, reps, rest, weight } = groupItems[index]// selecting the first item
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
    const { isReadOnly } = this.props
    return (
      <Tr className="exercise-row">
        { isReadOnly ? <Td>{this.props.muscleGroup}</Td> : <Td onClick={this.ShuffleButtonClicked}><ShuffleButton muscleGroup={this.props.muscleGroup}/></Td> }
        <Td>{this.props.order}</Td>
        <Td>{name}</Td>
        <Td>{sets}</Td>
        <Td>{reps instanceof Range ? reps.format() : reps}</Td>
        <Td>{rest}s</Td>
        <Td>{weight instanceof Range ? weight.format() : `${weight}%`}</Td>
      </Tr>
    )
  }
}

export default ExerciseRow;