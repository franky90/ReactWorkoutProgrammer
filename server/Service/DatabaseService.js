const mongoose = require('mongoose')

class dbManager {
    constructor({connString, username, password, dbName})
    {
        this.connString = connString
        if(typeof connString === "string" && (/^mongodb:\/\/localhost:27017$/g).test(connString) || typeof connString !== "string")
        {
            this.connString = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
        } else {
            this.connString = this.connString.replace(/<username>/, username)
            this.connString = this.connString.replace(/<password>/, password)
            this.connString = this.connString.replace(/<dbname>/, dbName)
        }

        this.mongoOptions = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            sslValidate: false,
            useCreateIndex: true
        }

    }

    async connect() 
    {
        let isSuccess = false
        try {
            await mongoose.connect(this.connString, this.mongoOptions)
            isSuccess = true
        } catch(err) {
            console.log('err in db connection...')
            console.dir(err)
            process.exit(1)// crashes application...
        } finally 
        {
            return isSuccess
        }
    }

    async getConnection()
    {
        let connection = null
        try {
            connection = await mongoose.createConnection(this.connString, this.mongoOptions)
            return connection
        } catch (error) {
            console.log('err in db connection...')
            console.dir(err)
            process.exit(1)// crashes application...
        }
        return connection
    }
}