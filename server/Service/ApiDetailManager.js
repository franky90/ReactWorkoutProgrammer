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
    let _path
    let _controller
    let _verb
    let _description
    let _body

    this.withBody = function(body){
        _body = body
        return this
    }

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
            description: _description,
            body: _body
        }
        for(settingsItem in settings) {
            let key = settingsItem
            let value = settings[settingsItem]
            let isValidValue = !!value
            if(!isValidValue) {
                delete settings[key]
            }
        }
        return settings
    }

    this.addSettings = function() {
        const newSetting = getSettings()
        ApiDetailManagerInstance.add(newSetting)
    }

}




module.exports = {
    ApiDetailManagerInstance,
    ApiDetail
}