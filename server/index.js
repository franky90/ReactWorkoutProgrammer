import ExpressLib from 'express'
const port = 5000
import { Logger } from './Service/Logger'
import Cors from 'cors'
import UserController from './Controllers/UserController'
import WorkoutController from './Controllers/WorkoutController'
import { MetaController } from './Controllers/ControllerDetails'
import { CustomMiddlewares } from './Service/CustomMiddlewares'
import Morgan from 'morgan'

const ExpressApp = ExpressLib()
ExpressApp.use(ExpressLib.json())
ExpressApp.use(ExpressLib.urlencoded())//Parse URL-encoded bodies
ExpressApp.use(Morgan('tiny'))
// this will prevent CORS issues in the future! - Currently Applies to all Requests
ExpressApp.use(CustomMiddlewares.CORS())

// Setting up my controllers here...
ExpressApp.use(UserController.toRoute(), UserController.Router)
ExpressApp.use(WorkoutController.toRoute(), WorkoutController.Router)
ExpressApp.use("/Meta", MetaController)

ExpressApp.use(Cors())

ExpressApp.listen(port, () => {
  Logger.Success(`Application is running at http://localhost:${port}`)
  Logger.danger(`Visit http://localhost:${port}/Meta to view information about all Routes`)//controllerName
  Logger.danger(`Visit http://localhost:${port}/Meta?controllerName=User to view information about all Routes belonging to User`)
  Logger.danger(`Visit http://localhost:${port}/Meta/byControllerName to see Apis grouped by resource`)
})