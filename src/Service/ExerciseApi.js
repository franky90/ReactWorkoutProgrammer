import Axios from 'axios'

export class ExerciseApi 
{
    constructor() {
        // Note for self! 
        // need to figure out a way to make this dynamic,
        // so that when this is hosted we are not calling localhost
        this.apiBase = 'http://localhost:5000'
    }
    
    /**
     * makes an Api call that will allow a user to be registered
     */
    getTableData({goal, workoutCategory}) {
        return Axios.get(`${this.apiBase}/Exercise/?goal=${goal}&workoutCategory=${workoutCategory}`)
    }
}