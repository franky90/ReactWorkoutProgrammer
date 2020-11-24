import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const LegsPush = new Exercise(
{
    name: "Legs Push",
    sets: 4,
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
    muscleGroup: muscleGroup.Legs
})