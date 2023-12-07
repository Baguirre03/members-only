const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    artist: { type: Schema.Types.ObjectId, ref: "User" },
    time: { type: Date },
    text: { type: String, required: true },
})

module.exports = mongoose.model('message', messageSchema)