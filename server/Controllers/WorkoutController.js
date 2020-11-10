import { ControllerBase } from './ControllerBase'
class WorkoutController extends ControllerBase {
    constructor()
    {
        super("Workout")
        this.descriptor(
            {
                path: '/', 
                verb: 'GET', 
                description: 'dummy route that gives us dummy data for the Workout resource'
            }
        )
        this.Router.get('/', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "Hello from Workout Controller"
            })
        })
    }
}

export default new WorkoutController()