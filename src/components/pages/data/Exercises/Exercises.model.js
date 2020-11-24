export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}

export const Goals = {
    Strength: 'Strength',
    Endurance: 'Endurance',
    LowReps: 'Low Reps',
    HighReps: 'High Reps'
}

export const muscleGroup = {
    Shoulders: 'Shoulders',
    Legs: 'Legs',
    Chest: 'Chest',
    Back: 'Back'
}


export default class Exercise 
{
    constructor({name, sets, reps, rest, weight, goal, muscleGroup}) {
        this.name = name
        this.sets = sets
        this.reps = reps
        this.rest = rest
        this.weight = weight
        this.goal = goal
        this.muscleGroup = muscleGroup
    }

    withSets(sets) {
        this.sets = sets
        return this
    }

    withReps(reps) {
        this.reps = reps
        return this
    }

    withRest(rest) {
        this.rest = rest
        return this
    }

    withWeight(weight) {
        this.weight = weight
        return this
    }

    withGoal(goal) {
        this.goal = goal
        return this
    }

    static copyExercise(ExerciseReference) {
        return new Exercise(ExerciseReference)
    }
}
