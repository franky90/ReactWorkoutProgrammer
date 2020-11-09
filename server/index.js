const express = require('express')
const app = express()
const port = 5000
const Logger = require('./Service/Logger')
const cors = require('cors')
const { readFileData } = require('./Service/GoogleService') 
const UserController = require('./Controllers/UserController')
const WorkoutController = require('./Controllers/WorkoutController')
const MetaController = require('./Controllers/ControllerDetails')

app.use("/User", UserController)
app.use("/Workout", WorkoutController)
app.use("/Meta", MetaController)

app.use(cors())

app.listen(port, () => {
  Logger.Success(`My app listening at http://localhost:${port}`)
  readFileData()
})