import React, { Component } from 'react'
import WorkoutCreatorOptions from './../WorkoutCreator/WorkoutCreatorOptions'
import { WorkoutTable } from './../WorkoutTable'
import { allExercises } from './../data/workoutTableData'
import { Goals, muscleGroup } from './../data/Exercises/Exercises.model'

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
            trainingTypeHeading:"",
            trainingTypeDescription: '',
            Goal: Goals.Strength// need to specify the goal here!
        }
    }

    routeChanged = newRouteName => {
        // NOTE TO PETER -- Ideally I will make a Serverside call that gives me the Data inside the WorkoutTableProps!
        // I believe we should store this in mongo db and we will extract it here on load
        const trainingtype = newRouteName
        let WorkoutTableProps = {
            isReadOnly: false,
            SuperSetSize: 1,
        }
        let goalTitle = ""
        let goalOptionOne = ""
        let goalOptionTwo = ""
        let trainingTypeHeading = ''
        let trainingTypeDescription = ''
        let Goal = null
        switch (trainingtype) {
            case 'regular': {
                WorkoutTableProps = { 
                    ...WorkoutTableProps,
                    // data: regularExerciseCollection,
                    isSuperset: false,
                    isTypeHomeWorkout: false,
                    trainingTypeHeading:"What is a regular",
                    trainingTypeDescription: 'let me exaplain what it means to be regular...',
                }
                goalTitle = "SELECT YOUR GOAL"
                goalOptionOne = "Strength"
                goalOptionTwo = "Endurance"
                Goal = Goals.Strength
                break;
            }
            case 'supersets': {
                WorkoutTableProps = {
                    ...WorkoutTableProps,
                    SuperSetSize: 2,
                    // data: regularExerciseCollection,
                    isSuperset: true,
                    isTypeHomeWorkout: false,
                    trainingTypeHeading:"What is Super set",
                    trainingTypeDescription:"At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets. 'It increases the intensity of the workout while reducing the time it takes to execute the program,' says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals.",
                }
                goalTitle = "SELECT YOUR GOAL"
                goalOptionOne = "Strength"
                goalOptionTwo = "Endurance"
                Goal = Goals.Strength
                break;
            }
            case 'giantsets': {
                WorkoutTableProps = { 
                    ...WorkoutTableProps,
                    SuperSetSize: 3,
                    // data: regularExerciseCollection,
                    isSuperset: true,
                    isTypeHomeWorkout: false,
                    trainingTypeHeading: "What is Giant set",
                    trainingTypeDescription: 'let me exaplain what it means to be a GIANT',
                }
                goalTitle = "SELECT INTENSITY"
                goalOptionOne = "Low"
                goalOptionTwo = "High"
                Goal = Goals.LowReps
                break;
            }
            case 'homeworkout': {
                WorkoutTableProps = { 
                    ...WorkoutTableProps,
                    // data: regularExerciseCollection,
                    isSuperset: false,
                    isTypeHomeWorkout: true,
                    trainingTypeHeading: "Why to train at home?",
                    trainingTypeDescription: "Because you have no equipment",
                }
                goalTitle = "SELECT INTENSITY"
                goalOptionOne = "Low"
                goalOptionTwo = "High"
                Goal = Goals.Strength
                break;
            }
            default: {
                goalTitle = "Select Intensity"
                goalOptionOne = "Low"
                goalOptionTwo = "High"
                break;
            }
        }

        this.filterTableData({Goal}, WorkoutTableProps)

        this.setState({
            trainingtype, 
            isLoaded: true, 
            WorkoutTableProps,
            goalTitle,
            goalOptionOne,   
            goalOptionTwo,
            trainingTypeHeading,
            trainingTypeDescription,
            Goal
        })
    }


    filterTableData = (filters, workoutProps) => {
        let _exercises = allExercises.slice()
        if(filters.Goal) {
            _exercises = _exercises.filter((e) => e.goal === filters.Goal)
        }

        const exercisesByMuscleGroup = {}
        const outCollection = []
        _exercises.forEach(e => {
            if(exercisesByMuscleGroup[e.muscleGroup]) {
                exercisesByMuscleGroup[e.muscleGroup].exercise.push(e)
            } else {
                // first time adding the reference
                exercisesByMuscleGroup[e.muscleGroup] = {
                    exercise: [e],
                    title: e.muscleGroup
                }
                outCollection.push(exercisesByMuscleGroup[e.muscleGroup])
            }
        })
        if(Array.isArray(outCollection)) {
            workoutProps.data = outCollection
        }
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
        const isTypeHomeWorkout = WorkoutTableProps.isTypeHomeWorkout || false

        return <div className="workout-creator-container">
            
            <WorkoutCreatorOptions
                trainingTypeTitle={this.state.trainingtype}
                isSuperset={isSuperset}
                isTypeHomeWorkout = {isTypeHomeWorkout}
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