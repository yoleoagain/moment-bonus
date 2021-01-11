import mongoose from 'mongoose'

const DB_URL = 'mongodb://localhost:27017'

export const connectDb = () => { 
    return mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
                if (err){
                    console.log('DB_FAILED', err)
                } else{
                    console.log('B_CONNECTED')
                }
            })
}

export const db = mongoose.connection