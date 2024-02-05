const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { DateTime } = require('luxon')

const messageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "user" },
    time: { type: Date },
    text: { type: String, required: true },
})

messageSchema.virtual('date_formatted').get(function () {
    return DateTime.fromJSDate(this.time).toLocaleString(DateTime.DATETIME_MED);
})

messageSchema.virtual('url').get(function () {
    return `/${this._id}/delete`
})

module.exports = mongoose.model('message', messageSchema)