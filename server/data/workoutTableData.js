import { MilitaryPressBarbell, MilitaryPressBarbellRegularEndurance } from './Exercises/Shoulders'
import { BackSquatBarbell, DeadLift } from './Exercises/Legs'
import { StandingCalfRaises } from './Exercises/Calves'
import { HollowBody } from './Exercises/Abs'
import { Chest, LowRepsChest } from './Exercises/Chest'
import { PullUps } from './Exercises/Back'
import Exercise, { Goals, muscleGroup } from './Exercises/Exercises.model'

export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}

// mimicks how this would be saved on the db.
export const allExercises = [
    // Here are the Strenth Exercise
    MilitaryPressBarbell,
    BackSquatBarbell,
    DeadLift,
    Chest,
    PullUps,
    StandingCalfRaises,
    HollowBody,
    // Here are the endurance Exercise
    Exercise.Copy(MilitaryPressBarbell)// has a diff memory location!
        .withGoal(Goals.Endurance)
        .withSets(3)
        .withReps({small: 15,large: 20, type: rangeTypes.numericMultiple})
        .withRest('60-90')
        .withWeight({value: 50, type: rangeTypes.numericWeight}),

]