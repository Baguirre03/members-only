const Message = require('../models/message.js')
const User = require('../models/user.js')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator')

exports.signup_get = asyncHandler(async (req, res, next) => {
    res.render('sign-up', {
        title: "Sign Up for Members Only!"
    })
})

exports.signup_post = [
    body('first_name')
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('last_name')
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('password')
        .trim()
        .isLength({ min: 1 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            try {
                const user = new User({
                    firstName: req.body.first_name,
                    lastName: req.body.last_name,
                    password: hashedPassword,
                    membership: false,
                })
                await user.save()
                res.redirect(`/`)
            } catch (err) {
                return next(err)
            }
        })
    })
]

