const ControllerBase = require('./ControllerBase')
const exerciseList = [{
    id: 1,
    button: "Button1",
    order: "A",
    exerciseName: "Exercise One Blablabla",
    sets: "3 sets ",
    reps: "10 reps",
    rest: "90s rest",
    weight: "30kg"
},

{
    id: 2,
    button: "Button2",
    order: "B",
    exerciseName: "Exercise Two",
    sets: " set 2",
    reps: " rep 2",
    rest: " rest 2",
    weight: "weight 2"
},
{
    id: 3,
    button: "Button3",
    order: "C",
    exerciseName: "Exercise Three",
    sets: " set 3",
    reps: " rep 3",
    rest: " rest 3",
    weight: "weight 3"
}
];

class WorkoutRoute extends ControllerBase {

    constructor({resourceName}) {
        super({resourceName})
        this.getApiCalls()
    }

    /**
     * Going to define all my Get Calls for this resource here.
     */
    getApiCalls() {
        
        //http://localhost:5000/Workout/
        this.Router.get('/', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "Hello from Workout controller"
            })
        })

        // http://localhost:5000/Workout/getExerciseList
        this.Router.get('/getExerciseList', (req, res) => {
            res.send({
                isSuccess: true,
                exerciseList 
            })
        })
    }
}

module.exports = WorkoutRoute