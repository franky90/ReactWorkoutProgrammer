export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}
export const Shoulders = {
    title: "Shoulders",
    exercise: [
        {
            name: "Shoulders",
            sets: 3,
            reps: {
                small: 10,
                large: 20,
                type: rangeTypes.numericMultiple
            },
            rest: 90,
            weight: {
                value: 70,
                type: rangeTypes.numericWeight
            }
        },
        {
            name: "Shoulders 2 intense",
            sets: 3,
            reps: {
                small: 12,
                large: 20,
                type: rangeTypes.numericMultiple
            },
            rest: 30,
            weight: {
                value: 75,
                type: rangeTypes.numericWeight
            }
        }
    ]
}
export const Legs = {
    title: "Legs",
    exercise: [
        {
            name: "Back squat",
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
        },
        {
            name: "Goblet squat",
            sets: 4,
            reps: {
                value: 12,
                type: rangeTypes.numeric
            },
            rest: 30,
            weight: {
                small: 50,
                large: 60,
                type: rangeTypes.numericWeightMultiple
            }
        }
    ]
}
export const Butt = {
    title: "Glutes",
    exercise: [
        {
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
        },
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
        }
    ]
}
export const Hips = {
    title: "Hips",
    exercise: [
        {
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
        }
    ]
}
export const regularExerciseCollection = [Shoulders, Legs, Butt, Hips, Shoulders, Legs, Butt, Hips]