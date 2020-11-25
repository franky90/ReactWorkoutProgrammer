import { ControllerBase } from './ControllerBase'
// import { Goals } from './../data/Exercises/Exercises.model'
import { allExercises } from './../data/workoutTableData'

function filterTableData(goal)
{
    return allExercises.filter(e => e.goal === goal)
}

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


        // returns void
        this.Router.get('/', (req, res) => {

            if(req && req.query && req.query.goal) { 
                const { goal } = req.query
                res.send({
                    isSuccess: true,
                    tableData: groupTableData(
                        filterTableData(goal)
                    )
                })
                return      
            }

            res.send({
                isSuccess: true,
                tableData: []
            })

        })
    }
}

export default new ExerciseController()