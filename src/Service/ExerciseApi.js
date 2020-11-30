import Axios from 'axios'

export class ExerciseApi 
{
    constructor() {
        this.apiBase = process.env.REACT_APP_apiBase
    }
    
    /**
     * makes an Api call that will allow a user to be registered
     */
    getTableData({goal, workoutCategory}) {
        return Axios.get(`${this.apiBase}/Exercise/?goal=${goal}&workoutCategory=${workoutCategory}`)
    }
}