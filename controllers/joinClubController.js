const asyncHandler = require('express-async-handler')
const authenticate = require('../config/passport.js')
const { body, validationResult } = require('express-validator')
const User = require('../models/user.js')
const Message = require('../models/message.js')
const login = require('../config/passport.js')


exports.get_joinclub = asyncHandler(async (req, res, next) => {
    res.render('joinclub', {
        title: "Join the club TODAY!",
        user: req.user,
    })
})

exports.post_joinclub = [
    body('secret_password')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .matches('TOP'),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render('joinclub', {
                title: "Join the club TODAY!",
                user: req.user,
                errors: errors.array()
            })
        } else {
            await User.updateOne({ _id: req.user._id }, {
                $set: {
                    membership: true
                }
            })
            const user = await User.findById(req.user._id)
            req.login(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/messages');
            })
        }
    })
]