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

const EdurancePipe = ExerciseReference => Exercise.Copy(ExerciseReference).withGoal(Goals.Endurance).withSets(3).withReps({small: 15,large: 20, type: rangeTypes.numericMultiple}).withRest('60-90').withWeight({value: 50, type: rangeTypes.numericWeight})

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
    EdurancePipe(MilitaryPressBarbell),
    EdurancePipe(BackSquatBarbell),
    EdurancePipe(DeadLift),
    EdurancePipe(Chest),
    EdurancePipe(PullUps),
    EdurancePipe(StandingCalfRaises),
    Exercise.Copy(HollowBody)
        .withGoal(Goals.Endurance)
        .withSets(3)
        .withReps({value: '20s', type: rangeTypes.numeric})
        .withRest('60-90')
        .withWeight({value: 50, type: rangeTypes.numericWeight}),
    Exercise.Copy(MilitaryPressBarbell).withRest(10).withWorkoutCategory(workoutCategory.supersets)
]