export class MuscleGroup {
    constructor({ title }) {
        this.title = title
        this.exercise = []
    }

    addExercise = ({ name, sets, reps, rest, weight }) => {
        this.exercise.push({ name, sets, reps, rest, weight });
    }
}