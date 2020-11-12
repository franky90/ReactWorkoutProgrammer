import React from "react"
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./../ShuffleButton"
import { Alphabet } from './../../Records/Aphabet'

export class WorkoutTableRow extends React.Component {
  constructor(props) {
    super(props)
    const index = 0// by default we are the first index
    const { exercise } = this.props
    const { name, sets, reps, rest, weight } = exercise[index]// selecting the first item
    this.state = { name, sets, reps, rest, weight, exercise, index }
  }

  ShuffleButtonClicked = () => {
    const groupItemsLength = this.state.exercise.length
    const index = (this.state.index + 1) % groupItemsLength
    const groupItemsCopy = this.state.exercise.slice()
    const newItems = groupItemsCopy[index]
    this.setState({...newItems, index })
  }

  rangeToCellContent = rangeObject => {
      let cellContent = '-'
      switch (rangeObject.type) {
        case "numeric-multiple":
            cellContent = `${rangeObject.small}-${rangeObject.large}`;
            break;
        case 'numeric':
            cellContent = rangeObject.value;
            break;
        case 'numeric-weight-multiple':
            cellContent = `${rangeObject.small}-${rangeObject.large}%RM`
            break;
      }
      return cellContent
  }

  render() {
    const { name, sets, reps, rest, weight } = this.state
    const { isReadOnly } = this.props
    return (
      <Tr className="exercise-row">
        { isReadOnly ? <Td>{this.props.title}</Td> : <Td onClick={this.ShuffleButtonClicked}><ShuffleButton muscleGroup={this.props.title}/></Td> }
        <Td>{this.props.isSuperSet ? Alphabet.getAlphabetFromIndex(Math.floor((this.props.order - 1)/2))+((this.props.order+1) % 2) + 1 : this.props.order}</Td>
        <Td>{name}</Td>
        <Td>{sets}</Td>
        <Td>{this.rangeToCellContent(reps)}</Td>
        <Td>{rest}s</Td>
        <Td>{this.rangeToCellContent(weight)}</Td>
      </Tr>
    )
  }
}