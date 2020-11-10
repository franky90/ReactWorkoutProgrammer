import Express from 'express'
import { ApiDetail } from "./../Service/ApiDetailManager"
export class ControllerBase
{
    constructor(controllerPrefix)
    {
        this.routerPath = controllerPrefix
        this.Router = Express.Router()
    }

    describeApi({path, verb, description, body, response})
    {
        new ApiDetail()
        .withController(this.routerPath)
        .withPath(path)
        .withVerb(verb)
        .withDescription(description)
        .withBody(body)
        .withResponse(response)
        .addSettings()
    }

    toRoute() {
        return "/"+this.routerPath
    }
}