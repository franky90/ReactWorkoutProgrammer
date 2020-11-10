import Express from 'express'
import { ApiDetail } from "./../Service/ApiDetailManager"
export class ControllerBase
{
    constructor(controllerPrefix)
    {
        this.routerPath = controllerPrefix
        this.Router = Express.Router()
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

    toRoute() {
        return "/"+this.routerPath
    }
}