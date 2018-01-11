const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// const PROTECT = passport.authenticate('jwt', { session: false });


// // // // // // // // // // // // // // // // // // // // // //


// Register
router.post('/register', (req, res, next) => {

	User.getLastUserId((err, lastUser) => {
		if (err) {
			console.log('Cant find last user');
		}
		else {
			let U = req.body;

			let newUser = new User({
				id: lastUser.id + 1,
				name: U.name,
				email: U.email,
				password: U.password,
				parentTeamId: [],
				avatar: U.avatar
			});

			User.addUser(newUser, (err, user) => {
				if (err) {
					res.json({
						success: false,
						msg: 'USES User registration error'
					});
				}
				else {
					res.status(201).json({
						success: true,
						msg: 'USES User ' + newUser.email + ' registered'
					});
				}
			});
		}
	});
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
	console.log('AUTH - body', req.body);
	console.log('AUTH - headers', req.headers);

	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) => {
		if (err) {
			throw err;
		}
		if (!user) {
			return res.json({
				success: false,
				msg: 'USES User ' + email + ' not found'
			});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) {
				throw err;
			}
			if (isMatch) {
				// user.toObject() || { data: user }
				const token = jwt.sign({ data: user }, config.secret, {
					expiresIn: 604800 // 1week
				});
				return res.status(200).json({
					success: true,
					msg: 'USES User ' + email + ' authenticated',
					token: 'JWT ' + token,
					user: {
						_id: user._id,
						id: user.id,
						name: user.name,
						email: user.email,
					}
				});
			}
			else {
				return res.json({
					success: false,
					msg: 'USES Wrong password for user ' + email
				});
			}
		});
	});
});


module.exports = router;