import React, { Component } from 'react'
import WorkoutCreatorOptions from './../WorkoutCreator/WorkoutCreatorOptions'
import { WorkoutTable } from './../WorkoutTable'
import { regularExerciseCollection, } from './../data/workoutTableData'

export class WorkoutCreator extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            trainingtype: '',
            isLoaded: false,
            WorkoutTableProps: {},
            goalTitle:"",
            goalOptionOne:"",
            goalOptionTwo:"",
            // isSuperset: false,
            trainingTypeHeading:"",
            trainingTypeDescription: ''
        }
    }

    routeChanged = newRouteName => {
        // NOTE TO PETER -- Ideally I will make a Serverside call that gives me the Data inside the WorkoutTableProps!
        // I believe we should store this in mongo db and we will extract it here on load
        const trainingtype = newRouteName
        let WorkoutTableProps = {}
        let goalTitle = "testing"
        let goalOptionOne = "One"
        let goalOptionTwo = "Two"
        let trainingTypeHeading = ''
        let trainingTypeDescription = ''
        switch (trainingtype) {
            case 'regular':
                WorkoutTableProps = { 
                    data: regularExerciseCollection,
                    isSuperset: false,
                    trainingTypeHeading:"What is a regular",
                    trainingTypeDescription: 'let me exaplain what it means to be regular...',
                    goalTitle: "Select Your Goal",
                    goalOptionOne: "Strength",
                    goalOptionTwo: "Endurance"
                }

                break;
            case 'supersets':
                WorkoutTableProps = { 
                    data: regularExerciseCollection,
                    isSuperset: true,
                    trainingTypeHeading:"What is Super set",
                    trainingTypeDescription:"At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets. 'It increases the intensity of the workout while reducing the time it takes to execute the program,' says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals.",
                    goalTitle: "Select Your Goal",
                    goalOptionOne: "Strength",
                    goalOptionTwo: "Endurance"
                }
                break;
            case 'giantsets': 
                WorkoutTableProps = { 
                    data: regularExerciseCollection,
                    isSuperset: true,
                    trainingTypeHeading: "What is Giant set",
                    trainingTypeDescription: 'let me exaplain what it means to be a GIANT',
                    goalTitle: "Select Intensity",
                    goalOptionOne: "Low",
                    goalOptionTwo: "High"
                }
                break;
            default:
                
                break;
        }
        this.setState({
            trainingtype, 
            isLoaded: true, 
            WorkoutTableProps,
            goalTitle,
            goalOptionOne,   // OKKK man. Default is empty for now
            goalOptionTwo,
            trainingTypeHeading,
            trainingTypeDescription
        })
    }

    componentDidMount() 
    {
        // once component mounts this will be called... and if nothing is matched default will hit... see the default case:
        this.routeChanged(this.props.match.params.worktype)
    }

    
    render() {

        if(this.state.isLoaded === false) {
            return null
        }

        const { WorkoutTableProps } = this.state
        const isSuperset = WorkoutTableProps.isSuperset || false

        return <div className="workout-creator-container">
            
            <WorkoutCreatorOptions
                trainingTypeTitle={this.state.trainingtype}
                isSuperset={isSuperset}
                goalTitle= {this.state.goalTitle}
                goalOptionOne= {this.state.goalOptionOne}
                goalOptionTwo= {this.state.goalOptionTwo}
                trainingTypeHeading={this.state.WorkoutTableProps.trainingTypeHeading}
                trainingTypeDescription={this.state.WorkoutTableProps.trainingTypeDescription}
                routeChanged={this.routeChanged}
            />
            <WorkoutTable {...WorkoutTableProps}/>
        </div>
    }
}