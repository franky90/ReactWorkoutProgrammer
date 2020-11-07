const express = require('express')
const app = express()
const port = 5000
const Logger = require('./Service/Logger')
const cors = require('cors')

// I define all the controllers here
const Controllers = require('./Controllers/AllControllerInstances')

Logger.Title('\tHere are the Resource Routes we are creating')
Controllers.forEach((controllerInstance, index) => {
    const routePath = '/' + controllerInstance.resourceName
    Logger.spaced(1)
    Logger.danger('\t\t'+(index+1)+' '+routePath)
    Logger.spaced(1)
    app.use(routePath, controllerInstance.Router)    
})
app.use(cors())

app.listen(port, () => {
  Logger.Success(`My app listening at http://localhost:${port}`)
})