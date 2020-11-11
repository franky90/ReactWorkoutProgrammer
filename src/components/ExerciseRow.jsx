import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import ShuffleButton from "./ShuffleButton";
import Order from "../components/ExerciseRowComponents/Order"
import ExerciseName from "../components/ExerciseRowComponents/ExerciseName"
import Sets from "../components/ExerciseRowComponents/Sets"
import Reps from "../components/ExerciseRowComponents/Reps"
import Weight from "../components/ExerciseRowComponents/Weight"
import Rest from "../components/ExerciseRowComponents/Rest"

// const exerciseList = [
//   {
//     title:"shoulders",
//     shouldersExercises:["shoulder press", "machine-press", "push ups upsite down"]
//   },
//   {
//     title:"chest",
//     shouldersExercises:["push ups", "bench press", "dumbbells flyes"]
//   },
//   { title:"legs",
//     legsExercises:["back squat", "leg press", "goblet squat"]
//   },

// ]




class ExerciseRow extends React.Component {
  constructor(props) {
    super(props);
  }
    

  ShuffleButtonClicked = () => {
    alert(`button with id of ${this.props.id} got clicked!`);
  }
  render() {
    const { muscleGroup, exerciseName, sets, reps, rest, weight, id } = this.props
    return (
      <Tr className="exercise-row">

    
        <Td onClick={this.ShuffleButtonClicked}>
          <ShuffleButton />
        </Td>
        <Td><Order order={id} /></Td>
        <Td><ExerciseName name={exerciseName} /></Td>
        <Td><Sets sets={sets}/></Td>
        <Td><Reps reps={reps}/></Td>
        <Td><Rest rest={rest}/></Td>
        <Td><Weight weight={weight}/></Td>
      </Tr>
    );
  }
}
export default ExerciseRow;
