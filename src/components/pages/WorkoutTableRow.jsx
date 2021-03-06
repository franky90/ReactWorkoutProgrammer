import React from "react"
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./../ShuffleButton"
import { Alphabet } from './../../Records/Aphabet'
import { rangeTypes } from './../pages/data/Exercises/Exercises.model'

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

  // gives us access to 
  // const { name, sets, reps, rest, weight } =
  getExerciseData = () => {
    const { exercise } = this.props
    return exercise[this.state.index]// selecting the first item
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
        case rangeTypes.numericWeight:
          cellContent = `${rangeObject.value}%RM`
          break;
        case rangeTypes.numericSeconds:
          cellContent = `${rangeObject.value}s`
          break;
      }
      return cellContent
  }

  getSupersetOrder = superSetN => {
    const _letter = Alphabet.getAlphabetFromIndex(Math.floor((this.props.order - 1)/superSetN)) 
    const _number = ((this.props.order+(superSetN-1)) % superSetN)+1
    return _letter+_number
  }

  renderMuscleGroupCell = (isReadOnly, title) => {
    // Properties to be injected in Td JSX.Component
    let tdHTMLProps = {
      // classname: 'notClickable'
    }
    if(isReadOnly === false) {
      tdHTMLProps = {
        onClick: this.ShuffleButtonClicked,
        className: 'clickable'
      }
    }
    return <Td {...tdHTMLProps}>
      <ShuffleButton isReadOnly={isReadOnly} muscleGroup={title}/>
    </Td> 
  }

  render() {
    
    // const { name, sets, reps, rest, weight, index } = this.state
    const { name, sets, reps, rest, weight } = this.getExerciseData()
    const { isSuperSet, title, isReadOnly, SuperSetSize } = this.props
    const groupItemsLength = this.state.exercise.length
    let _isReadOnly = isReadOnly

    if(_isReadOnly === false) {
      _isReadOnly = groupItemsLength <= 1
    }

    return (
      <Tr className="exercise-row">
        {this.renderMuscleGroupCell(_isReadOnly, title)}
        <Td>{isSuperSet ? this.getSupersetOrder(SuperSetSize) : this.props.order}</Td>
        <Td>{name}</Td>
        <Td>{sets}</Td>
        <Td>{this.rangeToCellContent(reps)}</Td>
        <Td>{rest}s</Td>
        <Td>{this.rangeToCellContent(weight)}</Td>
      </Tr>
    )
  }
}