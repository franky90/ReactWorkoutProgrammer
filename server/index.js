const express = require('express')
const app = express()
const port = 5000
const Logger = require('./Service/Logger')
const cors = require('cors')
// const { readFileData } = require('./Service/GoogleService') 
const UserController = require('./Controllers/UserController')
const WorkoutController = require('./Controllers/WorkoutController')
const MetaController = require('./Controllers/ControllerDetails')
const CustomMiddlewares = require('./Service/CustomMiddlewares')
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded())//Parse URL-encoded bodies
app.use(morgan('tiny'))
// this will prevent CORS issues in the future! - Currently Applies to all Requests
app.use(CustomMiddlewares.CORS())

// Setting up my controllers here...
app.use(UserController.toRoute(), UserController.Router)
app.use(WorkoutController.toRoute(), WorkoutController.Router)
app.use("/Meta", MetaController)

app.use(cors())

app.listen(port, () => {
  Logger.Success(`My app listening at http://localhost:${port}`)
  Logger.Success(`Visit http://localhost:${port}/Meta to view information about all Routes`)//controllerName
  Logger.Success(`Visit http://localhost:${port}/Meta?controllerName=User to view information about all Routes belonging to User`)
})