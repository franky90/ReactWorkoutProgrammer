import Axios from 'axios'

export class UserApi 
{
    constructor() {
        // Note for self! 
        // need to figure out a way to make this dynamic,
        // so that when this is hosted we are not calling localhost
        this.apiBase = 'http://localhost:5000'
    }
    
    /**
     * makes an Api call that will allow a user to be registered
     */
    register({userName, password, email, dob}) {
        return Axios.post(this.apiBase+'/User/register', {userName, password, email, dob})
    }

    signIn(userName, password) {
        return Axios.post(this.apiBase+'/User/signin', {userName, password})
    }
}