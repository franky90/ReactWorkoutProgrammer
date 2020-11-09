const express = require('express')
const { ApiDetail } = require('./../Service/ApiDetailManager')
class ControllerBase
{
    constructor(controllerPrefix)
    {
        this.routerPath = controllerPrefix
        this.Router = express.Router()
    }

    descriptor({path, verb, description, body})
    {
        new ApiDetail()
        .withController(this.routerPath)
        .withPath(path)
        .withVerb(verb)
        .withDescription(description)
        .withBody(body)
        .addSettings()
    }

    toRoute(){
        return "/"+this.routerPath
    }
}

module.exports = ControllerBase