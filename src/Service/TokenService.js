import Axios from 'axios'

class TokenService 
{
    constructor() {
        const accessToken = localStorage.getItem('accessToken')
        this.accessToken = accessToken || ''
        this.AxiosTokenInstance = null
    }

    saveToken(token, persistToken)
    {
        this.accessToken = token
        // note that this is a public property from the Token Service Singleton
        this.AxiosTokenInstance = Axios.create({
            headers: {'Authorization': `Bearer ${token}`}
        })
        if(persistToken) {
            localStorage.setItem('accessToken', token)
        }
    }
}

// Poor mans singleton
export default new TokenService()