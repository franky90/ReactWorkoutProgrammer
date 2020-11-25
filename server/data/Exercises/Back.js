import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'



export const PullUps = new Exercise({
    name: "Pull Ups",
    sets: 5,
    reps: {
        small: 5,
        large: 8,
        type: rangeTypes.numericMultiple
    },
    rest: '90-120',
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    },
    goal: Goals.Strength,
    muscleGroup: muscleGroup.Back
})