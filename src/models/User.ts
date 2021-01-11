import { Schema, model } from 'mongoose'
//
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = model('user', UserSchema)

export default User