import { ControllerBase } from './ControllerBase'
class UserController extends ControllerBase {
    constructor()
    {
        super("User")
        this.describeApi(
            {
                path: '/', 
                verb: 'GET', 
                description: 'dummy route that gives us dummy data for the User resource'
            }
        )
        this.Router.get('/', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "Hello from User Controller"
            })
        })


        this.describeApi(
            {
                path: '/signin', 
                verb: 'POST', 
                description: 'dummy route that allows for the User resource to signin.',
                body: { "UserName": "admin", "password": "password" }
            }
        )
        this.Router.post('/signin', (req, res) => {

            /*
            const bodyFromRequest = req.body
            console.log(bodyFromRequest)
            console.log(req.body.UserName)
            */

            res.send({
                isSuccess: true,
                msg: "Hello from User Controller, Signin route"
            })
        })


        this.describeApi(
            {
                path: '/register', 
                verb: 'POST', 
                description: 'dummy route that allows User to create a profile.',
                body: { "UserName": "admin", "password": "password" }
            }
        )
        this.Router.post('/register', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "I am now a registered user"
            })
        })
    }
}

export default new UserController()