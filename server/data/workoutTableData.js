import { MilitaryPressBarbell } from './Exercises/Shoulders'
import { BackSquatBarbell, DeadLift } from './Exercises/Legs'
import { StandingCalfRaises } from './Exercises/Calves'
import { HollowBody } from './Exercises/Abs'
import { Chest, LowRepsChest } from './Exercises/Chest'
import { PullUps } from './Exercises/Back'
import Exercise, { Goals, muscleGroup, workoutCategory } from './Exercises/Exercises.model'

export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}

const EdurancePipe = ExerciseReference => Exercise.Copy(ExerciseReference)
    .withGoal(Goals.Endurance)
    .withSets(3)
    .withReps({small: 15,large: 20, type: rangeTypes.numericMultiple})
    .withRest('60-90')
    .withWeight({value: 50, type: rangeTypes.numericWeight})

const supersetStrengthPipe = ExerciseReference => Exercise.Copy(ExerciseReference)
    .withRest(10)
    .withWorkoutCategory(workoutCategory.supersets)

// mimicks how this would be saved on the db.
export const allExercises = [
    // These are the Strenth Exercise for Regular
    MilitaryPressBarbell,
    BackSquatBarbell,
    DeadLift,
    Chest,
    PullUps,
    StandingCalfRaises,
    HollowBody,
    // These are the Edurance Exercises for Regular
    EdurancePipe(MilitaryPressBarbell),
    EdurancePipe(BackSquatBarbell),
    EdurancePipe(DeadLift),
    EdurancePipe(Chest),
    EdurancePipe(PullUps),
    EdurancePipe(StandingCalfRaises),
    EdurancePipe(HollowBody).withReps({value: '20s', type: rangeTypes.numeric}),

    // These are the Stregth Exercises for Supersets
    supersetStrengthPipe(MilitaryPressBarbell)
]