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
    LegsPush: 'Legs Push',
    LegsPull: 'Legs Pull',
    Chest: 'Chest',
    Back: 'Back',
    Calves: 'Calves',
    Abs: 'Abs'
}

export const workoutCategory = {
    'regular': 'regular',
    'supersets': 'supersets',
    'giantsets': 'giantsets',
    'homeworkout': 'homeworkout'
}


export default class Exercise 
{
    constructor({name, sets, reps, rest, weight, goal, muscleGroup, workoutCategory = 'regular'}) {
        this.name = name
        this.sets = sets
        this.reps = reps
        this.rest = rest
        this.weight = weight
        this.goal = goal// this is something we filter by
        this.muscleGroup = muscleGroup
        this.workoutCategory = workoutCategory// this is something we filter by
    }

    withSets(sets) {
        const _newRef = new Exercise(this)
        _newRef.sets = sets
        return _newRef
    }

    withReps(reps) {
        const _newRef = new Exercise(this)
        _newRef.reps = reps
        return _newRef
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

    withWorkoutCategory(wc) {
        this.workoutCategory = wc
        return this
    }

    /**
     * Creates a new Exercise Reference!
     * @param {Exercise} BaseExercise 
     */
    static Copy(BaseExercise) {
        return new Exercise(BaseExercise)
    }
}
