import React from 'react'
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./ShuffleButton"

class SuperArms extends React.Component{
    constructor(){
    super()

    

    this.state = {
        pumpOneExercise: "example"
    }
    }

    
    
    shuffleExercise =()=> {
        
        const pumpOneArray = ["Dumbbells Lying Scullcrushers", "Standing Scullcrushers", "Tricepsowanie na maxa"]
        
        this.setState({pumpOneExercise : pumpOneArray[1] })
    }
    render(){

        return(
    <>
    <Tr className="exercise-row">
    
        <Td>
        <ShuffleButton onClick={this.shuffleExercise} muscleGroup="Super Arms Triceps" isReadOnly={false}/> 
        </Td>
        <Td>pump 1</Td>
        <Td>{this.state.pumpOneExercise} </Td>
        <Td>3</Td>
        <Td>15</Td>
        <Td>90s</Td>
        <Td>70%RM</Td>
    </Tr>
    <Tr className="exercise-row">
        <Td>
        <ShuffleButton  muscleGroup="Super Arms Biceps" isReadOnly={false}/> 
        </Td>
        <Td>pump 2</Td>
        <Td>Biceps Curls Barbell</Td>
        <Td>3</Td>
        <Td>15</Td>
        <Td>90s</Td>
        <Td>70%RM</Td>
    </Tr>
    </>
        )
    }
}

export default SuperArms;
