const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
    membership: null,
})

user.virtual('url', function () {
    return `/profile/${this._id}`
})

module.exports = mongoose.model('user', userSchema)