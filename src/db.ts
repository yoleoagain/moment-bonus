import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL

export const connectDb = () => {
    console.log('process.env', process.env.DB_URL)
    return DB_URL ? 
            mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
                if (err){
                    console.log('DB_FAILED', err)
                } else{
                    console.log('B_CONNECTED')
                }
            }) : console.log('DB_URL_EMPTY')
}

export const db = mongoose.connection