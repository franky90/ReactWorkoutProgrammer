export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple'
}

// function decorators
export const withReps = (exercise, reps) => Object.assign({}, exercise, {reps})
export const withSets = (exercise, sets) => Object.assign({}, exercise, {sets})
export const withRest = (exercise, rest) => Object.assign({}, exercise, {rest})
export const withWeight = (exercise, weight) => Object.assign({}, exercise, {weight})


export const shouldersExercise = {
    name: "Shoulders",
    /*
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
    */
}

const intenseShoulder = {
    name: "Shoulders 2 intense"
    /*
    ,sets: 3,
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
    */
}

export const squat = {
    name: "Back squat"
    /*
    ,sets: 3,
    reps: {
        value: 10,
        type: rangeTypes.numeric
    },
    rest: 90,
    weight: {
        value: 70,
        type: rangeTypes.numeric
    }
    */
}

const gobletSquat = {
    name: "Goblet squat",
    /*
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
    */
}


export const buttSquat = {
    name: "Butt squat"
    /*
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
    */
}

export const buttPushup = {
    name: "Butt Pushups"
    /*,
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
    }*/
}

const shakiraHipThrust = {
    name: "Dance to Shakira",
    /*
    sets: 3,
    reps: {
        value: 10,
        type: rangeTypes.numeric
    },
    rest: 90,
    weight: {
        value: 70,
        type: rangeTypes.numeric
    }*/
}