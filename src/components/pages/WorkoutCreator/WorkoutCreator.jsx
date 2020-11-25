import React, { Component } from 'react'
import WorkoutCreatorOptions from './../WorkoutCreator/WorkoutCreatorOptions'
import { WorkoutTable } from './../WorkoutTable'
import { regularStrength, regularEndurance, allExercises } from './../data/workoutTableData'
import { Goals, muscleGroup } from './../data/Exercises/Exercises.model'
import { ExerciseApi } from './../../../Service/ExerciseApi'

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
            Goal: Goals.Endurance// need to specify the goal here!
        }
    }

    routeChanged = (newRouteName, passedGoal) => {
        const goalFilter = passedGoal || this.state.Goal
        new ExerciseApi().getTableData({goal: goalFilter}).then((axiosResponse) => {
            if(axiosResponse.data.isSuccess && axiosResponse.data.tableData) {
                const WorkoutTablePropsCopy = {...WorkoutTableProps}
                WorkoutTablePropsCopy.data = axiosResponse.data.tableData
                this.setState({WorkoutTableProps: WorkoutTablePropsCopy })
            }
        }).catch((axiosError) => {
            debugger
        })
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
                passedGoal = Goals.Strength
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
                passedGoal = Goals.Strength
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
                passedGoal = Goals.LowReps
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
                passedGoal = Goals.Strength
                break;
            }
            default: {
                goalTitle = "Select Intensity"
                goalOptionOne = "Low"
                goalOptionTwo = "High"
                break;
            }
        }

        // this.filterTableData({Goal}, WorkoutTableProps)

        this.setState({
            trainingtype, 
            isLoaded: true, 
            WorkoutTableProps,
            goalTitle,
            goalOptionOne,   
            goalOptionTwo,
            trainingTypeHeading,
            trainingTypeDescription,
            // Goal: passedGoal
        })
    }


    filterTableData = (filters, workoutProps) => {
        /*
        debugger
        const newList = allExercises.filter(e => e.goal === filters.Goal).map(ex => {
            // copy of...
            ex.reps = {...ex.reps}
            ex.weight = {...ex.reps}
            return ex
        })

        if(filters.Goal === Goals.Strength) {
            workoutProps.data = regularStrength
        }
        if(filters.Goal === Goals.Endurance) {
            workoutProps.data = regularEndurance
        }

        // needs to produce same kind of data!
        console.log(workoutProps.data)

        // muscleGroup -> title
        // exercise -> Array<Exercise>
        const groupedCollection = []
        const keyValueTrack = {}
        newList.forEach(e => {

            if(keyValueTrack[e.muscleGroup]) {
                // existing entry
                keyValueTrack[e.muscleGroup].exercise.push(entry)
            } else {
                // brand new entry!
                let entry = { title: e.muscleGroup, exercise: e }
                keyValueTrack[e.muscleGroup] = [entry]
                groupedCollection.push(keyValueTrack[e.muscleGroup])
            }
        })
        */

    }

    componentDidMount() 
    {
        // once component mounts this will be called... and if nothing is matched default will hit... see the default case:
        this.routeChanged(this.props.match.params.worktype)
    }

    toggleGoalProps = () => {
        const Goal = this.state.Goal === Goals.Endurance ? Goals.Strength : Goals.Endurance
        this.setState({Goal: Goal })
        this.routeChanged(this.props.match.params.worktype, Goal)
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
                toggleGoalProps={this.toggleGoalProps}
            />
            <WorkoutTable {...WorkoutTableProps}/>
        </div>
    }
}