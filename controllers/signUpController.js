const Message = require('../models/message.js')
const User = require('../models/user.js')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator')
const authenticate = require('../config/passport.js')

exports.signup_get = asyncHandler(async (req, res, next) => {
    res.render('sign-up', {
        title: "Sign Up for Members Only!"
    })
})

exports.signup_post = [
    body('username')
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('password')
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('confirm_password')
        .trim()
        .isLength({ min: 1 })
        .custom((value, { req, loc, path }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        }),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("sign-up", {
                title: "Sign Up",
                errors: errors.array()
            })
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
                try {
                    const user = new User({
                        username: req.body.username,
                        password: hashedPassword,
                        membership: false,
                    })
                    await user.save()
                    req.login(user, function (err) {
                        if (err) { return next(err); }
                        return res.redirect('/messages');
                    })
                } catch (err) {
                    return next(err)
                }
            })
        }
    }),
]

