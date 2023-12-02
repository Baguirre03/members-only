const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    membership: { type: Boolean },
})

userSchema.virtual('url', function () {
    return `/profile/${this._id}`
})


module.exports = mongoose.model('user', userSchema)