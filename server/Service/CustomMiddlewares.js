export class CustomMiddlewares {
    static CORS(){
        return (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Headers', '*')
            if(req.method === 'OPTIONS') {
              // is Preflight request
              res.header('Access-Control-Allow-Methods', "PUT, POST, DELETE, GET, PATCH")
              return res.status(200).json({})
            }
            next()
        }
    }
}