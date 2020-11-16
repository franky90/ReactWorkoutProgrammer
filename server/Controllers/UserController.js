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
                body: { "username": "String", "password": "String", "email": "String", "dob": { "day": "number", "month": "number", 'year': "number" } }
            }
        )
        this.Router.post('/register', async (req, res) => {
            const { userName, password, email, dob } = req.body
            const { day, month, year } = dob
            const dateOfBirth = new Date(year, month, day)
            try {
                // searching for the user using email
                let myUserRecord = await UserService.getUserByEmail(email)
                if(!myUserRecord) {
                    myUserRecord = await UserService.getUserByUsername(userName)
                }


                // if User does NOT exist, we are good to adding the User to the service!
              if(!myUserRecord) {
                const UserRecord = await UserService.add(userName, password, email, dateOfBirth)
                const payload = {
                  id: UserRecord.id,
                  userName,
                  email
                }
                const jwt = await TokenService.getUserToken(payload)
                let goodResponse = {
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
                        ]
                    }
                )
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
        this.Router.post('/signin', async (req, res) => {
            
            const { userName, password } = req.body
            const _User = await UserService.getUserByUsername(userName)
            
            const isValidPassword = await UserService.verifyEncryptedPassword(password, _User.password)
            
            console.log('\n\n\n\n')
            console.log('isValidPassword', isValidPassword)
            console.log('password', password)
            console.log('encrypted.password', _User.password)
            console.log('\n\n\n\n')

            if(isValidPassword && _User._id) {
                const payload = {
                    id: _User._id,
                    userName,
                    email: _User.email
                  }
                  const jwt = await TokenService.getUserToken(payload)
                  res.send({
                    isSuccess: true,
                    jwt
                })                  
                  return
            }

            res.send({
                isSuccess: false,
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