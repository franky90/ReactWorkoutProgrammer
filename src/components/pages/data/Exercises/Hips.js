import Exercise, { rangeTypes } from './Exercises.model'

export const Dance = new Exercise({
    name: "Dance to Shakira",
    sets: 3,
    reps: {
        value: 10,
        type: rangeTypes.numeric
    },
    rest: 90,
    weight: {
        value: 70,
        type: rangeTypes.numericWeight
    }
})