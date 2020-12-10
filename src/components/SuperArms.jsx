import React from 'react'
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./ShuffleButton"

class SuperArms extends React.Component {
    constructor() {
        super()
        this.state = {
            TricepsExercises: "example",
            BicepsExercises: "",
            
            tricepsArray: [
                "Dumbbells Lying Scullcrushers", 
                "Standing Scullcrushers", 
                "Tricepsowanie na maxa"
            ],
            tricepsIndex: 0,

            bicepsArray: [
                "EZ-Bar Biceps Curls", 
                "Dumbbells Hummer Curls", 
                "Low Pulley Biceps"
            ],
            bicepsIndex: 0
        }
    }


    getExerciseByName = EName => {
        if(EName === 'Triceps') {
            return this.state.tricepsArray[this.state.tricepsIndex]
        } else if(EName === 'Biceps') {
            return this.state.bicepsArray[this.state.bicepsIndex]
        }
    }

    shuffleExercise = EName => {
        let ArrRef = []
        let index = 0
        let callBackFunc = newIndex => {}//empty callBack by default...
        if(EName === 'Triceps') {
            ArrRef = this.state.tricepsArray
            index = this.state.tricepsIndex
            callBackFunc = tricepsIndex => this.setState({tricepsIndex})
        } else if(EName === 'Biceps') {
            ArrRef = this.state.bicepsArray
            index = this.state.bicepsIndex
            callBackFunc = bicepsIndex => this.setState({bicepsIndex})
        }
        const newIndex = (index+1)%ArrRef.length
        callBackFunc(newIndex)
    }





    render() {
        return (
            <>
                <Tr className="exercise-row">
                    <Td onClick={() => this.shuffleExercise('Triceps')}>
                        <ShuffleButton muscleGroup="Super Arms Triceps" isReadOnly={false} />
                    </Td>
                    <Td>pump 1</Td>
                    <Td>{this.getExerciseByName('Triceps')} </Td>
                    <Td>3</Td>
                    <Td>15</Td>
                    <Td>30-90s</Td>
                    <Td>70%RM</Td>
                </Tr>
                <Tr className="exercise-row">
                    <Td onClick={() => this.shuffleExercise('Biceps')}>
                        <ShuffleButton muscleGroup="Super Arms Biceps" isReadOnly={false} />
                    </Td>
                    <Td>pump 2</Td>
                    <Td>{this.getExerciseByName('Biceps')}</Td>
                    <Td>3</Td>
                    <Td>15</Td>
                    <Td>60-90s</Td>
                    <Td>70%RM</Td>
                </Tr>
            </>
        )
    }
}

export default SuperArms;
