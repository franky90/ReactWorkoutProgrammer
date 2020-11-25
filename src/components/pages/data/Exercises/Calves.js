import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const StandingCalfRaises = new Exercise(
{
    name: "Standing Calf Raises",
    sets: 3,
    reps: {
        value: 12,
        type: rangeTypes.numeric
    },
    rest: '90',
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    },
    goal: Goals.Strength,
    muscleGroup: muscleGroup.Calves
})