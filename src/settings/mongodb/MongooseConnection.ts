import mongoose from "mongoose";

class MongooseConnection {
    databaseURI: string;

    constructor(databaseURI: any)
    {
        this.databaseURI = databaseURI;
    }

    async connect() {
        try {
            await mongoose.connect(this.databaseURI)
            mongoose.connection.once('open', () => {
                console.log('Connected to MongoDB')
            })
            mongoose.connection.on('error', (err: Error) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export default MongooseConnection;