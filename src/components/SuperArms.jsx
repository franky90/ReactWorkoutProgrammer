import React from 'react'
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./ShuffleButton"

class SuperArms extends React.Component {
    constructor() {
        super()
        this.state = {
            TricepsExercises: "example",
            BicepsExercises: "",
            tricepsArray: ["Dumbbells Lying Scullcrushers", "Standing Scullcrushers", "Tricepsowanie na maxa"],
            tricepsIndex: 0,
            bicepsArray: ["EZ-Bar Biceps Curls", "Dumbbells Hummer Curls", "Low Pulley Biceps"],
            bicepsIndex: 0
        }
    }

    getTriceps = () => {
        debugger
        return this.state.tricepsArray[this.state.tricepsIndex]
    }


    shuffleTriceps = () => {
        debugger
        const pumpOneArrayLength = this.state.tricepsArray.length
        const newIndex = this.state.tricepsIndex+1%pumpOneArrayLength
        if (newIndex < pumpOneArrayLength){
            this.setState({ tricepsIndex: newIndex })
        }
        else{
            this.setState({ tricepsIndex: 0 })
        }
        
    }

    getBiceps = () => {
        debugger
        return this.state.bicepsArray[this.state.bicepsIndex]
    }


    shuffleBiceps = () => {
        debugger
        const pumpOneArrayLength = this.state.bicepsArray.length
        const newIndex = this.state.bicepsIndex+1%pumpOneArrayLength
        if (newIndex < pumpOneArrayLength){
            this.setState({ bicepsIndex: newIndex })
        }
        else{
            this.setState({ bicepsIndex: 0 })
        }
        
    }


    render() {

        return (
            <>
                <Tr className="exercise-row">
                    <Td onClick={this.shuffleTriceps}>
                        <ShuffleButton muscleGroup="Super Arms Triceps" isReadOnly={false} />
                    </Td>
                    <Td>pump 1</Td>
                    <Td>{this.getTriceps()} </Td>
                    <Td>3</Td>
                    <Td>15</Td>
                    <Td>30-90s</Td>
                    <Td>70%RM</Td>
                </Tr>
                <Tr className="exercise-row">
                    <Td onClick={this.shuffleBiceps}>
                        <ShuffleButton muscleGroup="Super Arms Biceps" isReadOnly={false} />
                    </Td>
                    <Td>pump 2</Td>
                    <Td>{this.getBiceps()}</Td>
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
