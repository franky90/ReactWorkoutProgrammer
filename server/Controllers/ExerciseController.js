import { ControllerBase } from './ControllerBase'
import { allExercises } from './../data/workoutTableData'

function groupTableData(tblDat) {
    // empty object
    // keyed by string and value can be anything
    const keyValue = {}
    const outCollection  = []

    if(Array.isArray(tblDat) && tblDat.length > 0) {
        // muscleGroup
        tblDat.forEach(e => {
            const muscleGroup = e.muscleGroup
            if(keyValue[muscleGroup]) {
                keyValue[muscleGroup].exercise.push(e)
            } else {
                keyValue[muscleGroup] = { title : muscleGroup, exercise: [e] }
            }
        })
    }
    for(let key in keyValue) outCollection.push(keyValue[key])
    return outCollection
}


class ExerciseController extends ControllerBase {
    constructor()
    {
        super("Exercise")
        this.describeApi(
            {
                path: '/', 
                verb: 'GET', 
                description: 'dummy route that gives us dummy data for the Exercise resource'
            }
        )


        // Mandatory~ goal, workoutCategory
        this.Router.get('/', function(request, response) {
            try {
                // copies standard collection
                let allExercisesSubset = allExercises.filter(e => e.workoutCategory === request.query.workoutCategory && e.goal === request.query.goal)
                console.log(`workoutCategory -> ${request.query.workoutCategory}`)
                console.log(`goal -> ${request.query.goal}`)
                response.send({
                    isSuccess: true,
                    tableData: groupTableData(allExercisesSubset)
                })
                return//stop running this stupid ass function
            } catch (error) {
                response.send({isSuccess: false,tableData: []})
                return//stop running this stupid ass function
            }
        })


        // returns void
        this.Router.get('/MilitaryPressBarbell', (req, res) => {
            
            const MilitaryPressBarbellExercises = allExercises.filter(x => 
                x.name === 'Military Press Barbell'
            )

            res.send({ data: MilitaryPressBarbellExercises })
            return
        })


        // returns void
        this.Router.get('/allExercises', (req, res) => {
            res.send({ allExercises })
            return
        })


    }
}

export default new ExerciseController()