import Axios from 'axios'


export class WorkoutAPI {
    static getExerciseCollection(){
        const url = '/Workout/getExerciseList'
        return Axios.get(url)
    }
}