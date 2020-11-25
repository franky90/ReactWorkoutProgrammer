import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const Chest = new Exercise(
{
    name: "Bench Press Barbell",
    sets: 5,
    reps: {
        value: '5-8',
        type: rangeTypes.numeric
    },
    rest: '90-120',
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    },
    goal: Goals.Strength,
    muscleGroup: muscleGroup.Chest
})

export const LowRepsChest = new Exercise(
{
        name: "Bench Press Barbell",
        sets: 5,
        reps: {
            value: '5-8',
            type: rangeTypes.numeric
        },
        rest: '90-120',
        weight: {
            value: 25,
            type: rangeTypes.numericWeight
        },
        goal: Goals.LowReps,
        muscleGroup: muscleGroup.Chest
})