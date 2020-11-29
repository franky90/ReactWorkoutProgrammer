import { ControllerBase } from './ControllerBase'
// import { Goals } from './../data/Exercises/Exercises.model'
import { allExercises } from './../data/workoutTableData'


function groupTableData(tblDat)
{
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


// /Exercise/MilitaryPressBarbell
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
        this.Router.get('/', (req, res) => {

            // copies standard collection
            let data = allExercises.slice()
            data = data.filter(e => e.workoutCategory === req.query.workoutCategory && e.goal === req.query.goal)

            console.log(`workoutCategory -> ${req.query.workoutCategory}`)
            console.log(`goal -> ${req.query.goal}`)

            res.send({
                isSuccess: true,
                tableData: groupTableData(data)
            })
            return
        })



        // returns void
        this.Router.get('/MilitaryPressBarbell', (req, res) => {
            let data = allExercises.slice()
            const MilitaryPressBarbellExercises = data.filter(x => x.name === 'Military Press Barbell')
            res.send({ data: MilitaryPressBarbellExercises })
        })

    
    }
}

export default new ExerciseController()