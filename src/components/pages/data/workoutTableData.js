export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple'
}

const shouldersExercise = {
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
        type: rangeTypes.numeric
    }
}

const intenseShoulder = {
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
        type: rangeTypes.numeric
    }
}

export const ShoulderMuscleGroup = {
    title: "Shoulders",
    exercise: [
        shouldersExercise,
        intenseShoulder
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
                type: rangeTypes.numeric
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
                value: 10,
                type: rangeTypes.numeric
            },
            rest: 90,
            weight: {
                value: 70,
                type: rangeTypes.numeric
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
                small: 50,
                large: 60,
                type: rangeTypes.numericWeightMultiple
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
                type: rangeTypes.numeric
            }
        }
    ]
}


export const regularExerciseCollection = [ShoulderMuscleGroup, Legs, Butt, Hips, ShoulderMuscleGroup, Legs, Butt, Hips]