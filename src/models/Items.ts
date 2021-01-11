import { Schema, model } from 'mongoose'

const ItemSchema = new Schema ({
    // groupId, priceId
    id: Schema.Types.ObjectId,
    name: String,
    price: Number,
    picture_url: String,
    creation_date: Date
}, 
{ 
    collection: 'items',
    timestamps: true
})

const Item = model('user', ItemSchema)

export default Item
