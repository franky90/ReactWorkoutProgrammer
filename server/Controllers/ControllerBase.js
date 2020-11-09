const express = require('express')
const { ApiDetail } = require('./../Service/ApiDetailManager')
class ControllerBase
{
    constructor(controllerPrefix)
    {
        this.routerPath = controllerPrefix
        this.Router = express.Router()
    }

    descriptor({path, verb, description})
    {
        new ApiDetail()
        .withController(this.routerPath)
        .withPath(path)
        .withVerb(verb)
        .withDescription(description)
        .addSettings()
    }

    toRoute(){
        return "/"+this.routerPath
    }
}

module.exports = ControllerBase