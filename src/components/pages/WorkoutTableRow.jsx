import React from "react"
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./../ShuffleButton"
import { Alphabet } from './../../Records/Aphabet'
import { rangeTypes } from './../pages/data/workoutTableData'

export class WorkoutTableRow extends React.Component {
  constructor(props) {
    super(props)
    const index = 0// by default we are the first index
    const { exercise } = this.props
    const { name, sets, reps, rest, weight } = exercise[index]// selecting the first item
    this.state = { 
    name,
    sets,
    reps,
    rest,
    weight,
    exercise,
    index 
  }
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
        case rangeTypes.numericMultiple:
            cellContent = `${rangeObject.small}-${rangeObject.large}`;
            break;
        case rangeTypes.numeric:
            cellContent = rangeObject.value;
            break;
        case rangeTypes.numericWeightMultiple:
            cellContent = `${rangeObject.small}-${rangeObject.large}%RM`
            break;
      }
      return cellContent
  }

  getSupersetOrder = superSetN => {
    const _letter = Alphabet.getAlphabetFromIndex(Math.floor((this.props.order - 1)/superSetN)) 
    const _number = ((this.props.order+(superSetN-1)) % superSetN)+1
    return _letter+_number
  }

  render() {
    
    const { name, sets, reps, rest, weight } = this.state
    const { isReadOnly, isSuperSet } = this.props

    return (
      <Tr className="exercise-row">
        { isReadOnly ? <Td>{this.props.title}</Td> : <Td onClick={this.ShuffleButtonClicked}><ShuffleButton muscleGroup={this.props.title}/></Td> }
        <Td>{isSuperSet ? this.getSupersetOrder(3) : this.props.order}</Td>
        <Td>{name}</Td>
        <Td>{sets}</Td>
        <Td>{this.rangeToCellContent(reps)}</Td>
        <Td>{rest}s</Td>
        <Td>{this.rangeToCellContent(weight)}</Td>
      </Tr>
    )
  }
}