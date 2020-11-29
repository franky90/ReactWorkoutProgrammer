import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const MilitaryPressBarbell = new Exercise(
    {
        name: 'Military Press Barbell', 
        sets: 5,
        reps: {small: 5,large: 8, type: rangeTypes.numericMultiple},
        rest: '90-120',
        weight: {value: 70, type: rangeTypes.numericWeight},
        goal: Goals.Strength,
        muscleGroup: muscleGroup.Shoulders
    }
)