import { ControllerBase } from './ControllerBase'
import UserService from './../Service/UserService'
import TokenService from './../Service/TokenService'

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
                path: '/register', 
                verb: 'POST', 
                description: 'route that will be used to register a User resource.',
                body: { "username": "String", "password": "String", "email": "String" }
            }
        )
        this.Router.post('/register', async (req, res) => {
            const { username, password, email, dob } = req.body
            const { day, month, year } = dob
            const dateOfBirth = new Date(year, month, day)
            try {
              // check if user exist...
              const doesUserExist = await UserService.getUserByEmail(email)

              // if User does NOT exist, we are good to adding the User to the service!
              if(!doesUserExist) {
                const UserRecord = await UserService.add(username, password, email, dateOfBirth)
                const payload = {
                  id: UserRecord.id,
                  username: email
                }
                const jwt = await TokenService.getUserToken(payload)
                let goodResponse = {
                  username: email,
                  isSuccess: true,
                  jwt,
                  msg: 'user is authenticated'
                }
                res.send(goodResponse)
              } else {
                // user already exists
                res.send(
                    {
                        isSuccess: false, 
                        Error: [
                            {
                                msg: 'user already exists', 
                                enum: 0
                            }
                        ]})
              }
          
            } catch (error) {
              console.log(error)
              res.send({user: {}, isSuccess: false})
            }
        })


        this.describeApi(
            {
                path: '/signin', 
                verb: 'POST', 
                description: 'dummy route that allows User to signin  to their profile.',
                body: { "UserName": "admin", "password": "password" }
            }
        )
        this.Router.post('/signin', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "I need to add logic to this route... uses UserName Password to signin"
            })
        })


        this.describeApi(
            {
                path: '/allUsers', 
                verb: 'GET', 
                description: 'User that route that will allow us to view all user profiles',
            }
        )
        this.Router.get('/allUsers', async(req, res) => {
            try {
                const users = await UserService.getAllUsers()
                res.send(users)
            } catch (error) {
                res.status(401).send({users: []})                
            }
        })

    }
}

export default new UserController()