import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const HollowBody = new Exercise(
{
    name: "Hollow Body",
    sets: 3,
    reps: {
        value: '30s',
        type: rangeTypes.numeric
    },
    rest: 90,
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    },
    goal: Goals.Strength,
    muscleGroup: muscleGroup.Abs
})