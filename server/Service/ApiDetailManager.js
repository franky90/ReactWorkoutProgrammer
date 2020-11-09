const ApiDetailManager = function() {
    const _allDetails = []
    
    this.add = function(ApiDetailObject) {
        _allDetails.push(ApiDetailObject)
    }

    this.getAllDetails = function() {
        return [..._allDetails]
    }
}

const ApiDetailManagerInstance = new ApiDetailManager()

const ApiDetail = function() {
    let _path = ''
    let _controller = ''
    let _verb = ''
    let _description = ''

    this.withPath = function(path) {
        _path = path
        return this
    }
    
    this.withController = function(controller) {
        _controller = controller
        return this
    }

    this.withVerb = function(verb) {
        _verb = verb
        return this
    }

    this.withDescription = function(description) {
        _description = description
        return this
    }

    function getSettings(){
        const settings = {
            path: _path,
            controller: _controller,
            verb: _verb,
            description: _description
        }
        /*
        for(settingsItem in settings) {
            console.log(settingsItem, settings[settingsItem])
        }
        */
        return settings
    }

    this.addSettings = function() {
        ApiDetailManagerInstance.add(getSettings())
    }

}




module.exports = {
    ApiDetailManagerInstance,
    ApiDetail
}