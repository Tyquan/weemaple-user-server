const mongoose = require('mongoose')

class MongooseConnection {
    constructor(databaseURI)
    {
        this.databaseURI = databaseURI;
    }

    async connect() {
        try {
            await mongoose.connect(this.databaseURI)
            mongoose.connection.once('open', () => {
                console.log('Connected to MongoDB')
            })
            mongoose.connection.on('error', err => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = MongooseConnection;