const ControllerBase = require('./ControllerBase')

class UserController extends ControllerBase {

    constructor({resourceName}) {
        super({resourceName})
        this.getApiCalls()
    }

    /**
     * Going to define all my Get Calls for this resource here.
     */
    getApiCalls() {
        this.Router.get('/', (req, res) => {
            res.send({
                isSuccess: true,
                msg: "Hello from User Controller"
            })
        })        
    }
}

module.exports = UserController