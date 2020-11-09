const ApiDetail = function() {
    let _path = ''
    let _controller = ''
    let _verb = ''

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

    this.getSettings = function(){
        const settings = {
            path: _path,
            controller: _controller,
            verb: _verb
        }

        for(settingsItem in settings) {
            console.log(settingsItem)
        }

        return settings
    }

}


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

module.exports = {
    ApiDetailManagerInstance,
    ApiDetail
}