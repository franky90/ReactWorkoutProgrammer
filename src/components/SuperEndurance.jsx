import React from 'react'
import { Tr, Td } from "react-super-responsive-table"
import ShuffleButton from "./ShuffleButton"

class SuperEndurance extends React.Component {
    constructor() {
        super()
        this.state = {
            FirstEndurance: "",
            SecondEndurance: "",
            
            firstEnduranceArray: [
                {
                    name: "Treadmill Push",
                    sets: "3-5",
                    reps: "15sec",
                    rest: "60s",
                    weight: "body weight"
                },
                {
                    name: "Farmer Walk with Dumbbells",
                    sets: "3-5",
                    reps: "45 meters",
                    rest: "120s",
                    weight: "adjust"
                },
                {
                    name: "Slam Ball",
                    sets: "3-5",
                    reps: "10-15",
                    rest: "60s",
                    weight: "adjust"
                }
            ],
            firstEnduranceIndex: 0,

            secondEnduranceArray: [
                "Treadmill",
                "Rowing Machine",
                "Air bike"
            ],
            secondEnduranceIndex: 0
        }
    }


    getExerciseByName = (EName = 'first endurance') => {
        if(EName === 'second endurance') {
            return this.state.secondEnduranceArray[this.state.secondEnduranceIndex].name
        }else{
            let
        return this.state.firstEnduranceArray[this.state.firstEnduranceIndex].name
    }}

    shuffleExercise = (EName = 'first endurance') => {
        let ArrRef = this.state.firstEnduranceArray
        let index = this.state.firstEnduranceIndex
        let callBackFunc = firstEnduranceIndex => this.setState({firstEnduranceIndex})
        if(EName === 'second endurance') {
            ArrRef = this.state.secondEnduranceArray
            index = this.state.secondEnduranceIndex
            callBackFunc = secondEnduranceIndex => this.setState({secondEnduranceIndex})
        }
        const newIndex = (index+1)%ArrRef.length
        callBackFunc(newIndex)
    }





    render() {
        return (
            <>
                <Tr className="exercise-row">
                    <Td onClick={this.shuffleExercise}>
                        <ShuffleButton muscleGroup="Endurance One" isReadOnly={false} />
                    </Td>
                    <Td>endurance 1</Td>
                    <Td>{this.getExerciseByName()} </Td>
                    <Td>{this.state.firstEnduranceArray[this.state.firstEnduranceIndex].sets}</Td>
                    <Td>{this.state.firstEnduranceArray.reps}</Td>
                    <Td>{this.state.firstEnduranceArray.rest}</Td>
                    <Td>{this.state.firstEnduranceArray.weight}</Td>
                </Tr>
                <Tr className="exercise-row">
                    <Td onClick={() => this.shuffleExercise('second endurance')}>
                        <ShuffleButton muscleGroup="Endurance Two" isReadOnly={false} />
                    </Td>
                    <Td>endurance 2</Td>
                    <Td>{this.getExerciseByName('second endurance')}</Td>
                    <Td>3</Td>
                    <Td>15</Td>
                    <Td>60-90s</Td>
                    <Td>70%RM</Td>
                </Tr>
            </>
        )
    }
}

export default SuperEndurance;
