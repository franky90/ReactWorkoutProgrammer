const ControllerBase = require('./ControllerBase')

class UserController extends ControllerBase {
    constructor()
    {
        super("User")
        this.descriptor(
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


        this.descriptor(
            {
                path: '/signin', 
                verb: 'POST', 
                description: 'dummy route that allows for the User resource to signin.',
                body: { "UserName": "admin", "password": "password" }
            }
        )
        this.Router.post('/signin', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "Hello from User Controller, Signin route"
            })
        })
    }
}




module.exports = new UserController()