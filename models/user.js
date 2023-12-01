const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
    membership: { type: Boolean },
})

userSchema.virtual('url', function () {
    return `/profile/${this._id}`
})

userSchema.virtual('username', function () {
    return `${this.firstName} ${this.lastName}`
})

module.exports = mongoose.model('user', userSchema)