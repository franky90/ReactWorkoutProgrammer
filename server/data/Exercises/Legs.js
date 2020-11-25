import Exercise, { rangeTypes, Goals, muscleGroup } from './Exercises.model'

export const BackSquatBarbell = new Exercise(
{
    name: "Back Squat Barbell",
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
    muscleGroup: muscleGroup.LegsPush
})

export const DeadLift = new Exercise(
    {
        name: "Dead Lift",
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
        muscleGroup: muscleGroup.LegsPush
    })