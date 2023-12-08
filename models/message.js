const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "user" },
    time: { type: Date },
    text: { type: String, required: true },
})

module.exports = mongoose.model('message', messageSchema)