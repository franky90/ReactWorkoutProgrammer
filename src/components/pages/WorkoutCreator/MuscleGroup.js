export class MuscleGroup {
  constructor({ muscleGroup }) {
    this.muscleGroup = muscleGroup;
    this.groupItems = [];
  }

  withGroupItem = ({ name, sets, reps, rest, weight }) => {
    this.groupItems.push({ name, sets, reps, rest, weight });
    return this;
  };
}