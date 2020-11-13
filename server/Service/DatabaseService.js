import { connect, createConnection } from 'mongoose'
export class DbManager {
    constructor({connString, username, password, dbName})
    {
        this.connString = connString
        if(typeof connString === "string" && (/^mongodb:\/\/localhost:27017$/g).test(connString) || typeof connString !== "string")
        {
            this.connString = `mongodb://localhost:27017/?readPreference=primary&appname=WorkoutProgrammerDB%20Compass&ssl=false`
        } else {
            this.connString = this.connString.replace(/<username>/, username)
            this.connString = this.connString.replace(/<password>/, password)
            this.connString = this.connString.replace(/<dbname>/, dbName)
        }

        this.mongoOptions = {
            useNewUrlParser:        true, 
            useUnifiedTopology:     true, 
            sslValidate:            false,
            useCreateIndex:         true
        }

    }

    async connectToDatabase() 
    {
        let isSuccess = false
        try {
            await connect(this.connString, this.mongoOptions)
            isSuccess = true
        } catch(err) {
            console.log('err in db connection...')
            console.dir(err)
        } finally 
        {
            return isSuccess
        }
    }

    async getConnection()
    {
        let connection = null
        try {
            connection = await createConnection(this.connString, this.mongoOptions)
            return connection
        } catch (error) {
            console.log('err in db connection...')
            console.dir(err)
            // process.exit(1)// crashes application...
        }
        return connection
    }
}