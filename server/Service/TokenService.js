import Jsonwebtoken from 'jsonwebtoken'

const JWTSettings = {
    'secret': 'SECRET',
    'expiresin': '1d'
}

function TokenService() {

    const getUserToken = (payload) =>
    {

        return new Promise((resolve, reject) => {

            Jsonwebtoken.sign(
                payload, 
                JWTSettings.secret,
                { expiresIn: JWTSettings.expiresin },
                (error, token) => 
                {
                    if(error) {
                        reject(error)
                    }
                    // brings back a string token
                    resolve(token)
                }
            )
        })
    }


    const validateToken = async(token) => {

        return new Promise((resolve, reject) => { 
            // verify a token symmetric
            Jsonwebtoken.verify(token, JWTSettings.secret, function(err, decoded) {
                // default result
                let returnObject = {
                    isSuccess: false,
                    decoded: {}
                }
                if(err) {
                    reject(err)
                }
                returnObject = {
                    isSuccess: true,
                    decoded
                }
                resolve(returnObject)
            });
        })
    }

    return {
        getUserToken,
        validateToken
    }
}

export default TokenService()