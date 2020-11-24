import Exercise, { rangeTypes } from './Exercises.model'


export const ButtSquat = new Exercise({
    name: "Butt squat",
    sets: 3,
    reps: {
        value: 60,
        type: rangeTypes.numericSeconds
    },
    rest: 90,
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    }
})

export const ButtPushups = new Exercise(
{
    name: "Butt Pushups",
    sets: 4,
    reps: {
        value: 12,
        type: rangeTypes.numeric
    },
    rest: 30,
    weight: {
        value: 60,
        type: rangeTypes.numericWeight
    }
})