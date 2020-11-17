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
            isSuperset: false,
            trainingTypeHeading:"",
            trainingTypeDescription: ''
        }
    }


    componentDidMount() 
    {
        const trainingtype = this.props.match.params.worktype
        let WorkoutTableProps = {}
        let _isSuperset = false
        let trainingTypeHeading = ''
        let trainingTypeDescription = ''
        switch (trainingtype) {
            case 'regular':
                WorkoutTableProps = { 
                    data: regularExerciseCollection 
                }
                trainingTypeHeading="What is a regular"
                trainingTypeDescription = 'let me exaplain what it means to be regular...'
                break;
            case 'supersets':
                WorkoutTableProps = { 
                    data: regularExerciseCollection 
                }
                _isSuperset = true
                trainingTypeHeading="What is Super set"
                trainingTypeDescription="At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets. 'It increases the intensity of the workout while reducing the time it takes to execute the program,' says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals."
                break;
            case 'giantsets': 
                WorkoutTableProps = { 
                    data: regularExerciseCollection 
                }
                _isSuperset = true
                trainingTypeHeading="What is Giant set"
                trainingTypeDescription = 'let me exaplain what it means to be a GIANT'
                break;
            default:
                break;
        }
        this.setState({
            trainingtype, 
            isLoaded: true, 
            WorkoutTableProps, 
            isSuperset: _isSuperset,
            trainingTypeHeading,
            trainingTypeDescription
        })
    }

    
    render() {

        if(this.state.isLoaded === false) {
            return null
        }

        return <div className="workout-creator-container">
            <div className="trainings-menu-heading">
                <h1 className="uppercase">{this.state.trainingtype}</h1>
            </div>
            <WorkoutCreatorOptions 
                isSuperset={this.state.isSuperset} 
                trainingTypeHeading={this.state.trainingTypeHeading} 
                trainingTypeDescription={this.state.trainingTypeDescription}
            />
            <WorkoutTable {...this.state.WorkoutTableProps} />

        </div>
    }
}