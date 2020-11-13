import ExpressLib from 'express'
const port = 5000

// Import of Controllers
import UserController from './Controllers/UserController'
import WorkoutController from './Controllers/WorkoutController'
import { MetaController } from './Controllers/ControllerDetails'

// Import of Services
import { Logger } from './Service/Logger'
import { CustomMiddlewares } from './Service/CustomMiddlewares'
import { DbManager } from './Service/DatabaseService'

// Import of Middlewares
import Cors from 'cors'
import Morgan from 'morgan'

const ExpressApp = ExpressLib()
ExpressApp.use(ExpressLib.urlencoded({ extended: true }))//Parse URL-encoded bodies
ExpressApp.use(ExpressLib.json())
ExpressApp.use(Morgan('tiny'))
// this will prevent CORS issues in the future! - Currently Applies to all Requests
ExpressApp.use(CustomMiddlewares.CORS())

// Setting up my controllers here...
ExpressApp.use(UserController.toRoute(), UserController.Router)
ExpressApp.use(WorkoutController.toRoute(), WorkoutController.Router)
ExpressApp.use("/Meta", MetaController)

ExpressApp.use(Cors())

ExpressApp.listen(port, async () => {
  Logger.Success(`Application is running at http://localhost:${port}`)
  Logger.danger(`Visit http://localhost:${port}/Meta to view information about all Routes`)//controllerName
  Logger.danger(`Visit http://localhost:${port}/Meta?controllerName=User to view information about all Routes belonging to User`)
  Logger.danger(`Visit http://localhost:${port}/Meta/byControllerName to see Apis grouped by resource`)

  // default connection string will be localhost
  const connString = process.env.ATLAS_URI || 'mongodb://localhost:27017/ReactWorkoutProgrammer'
  if(await new DbManager({connString}).connectToDatabase()) {
    Logger.Success('Mongo Connection established.')
  } else {
    Logger.danger('Please install mongo db locally\nVisit the following Link\nhttps://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/#install-mongodb-community-edition')
    process.exit(1)// crashes application...
  }
  
})