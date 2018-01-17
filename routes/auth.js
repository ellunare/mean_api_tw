const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// // // // // // // // // // // // // // // // // // // // // //


// Register
router.post('/register', (req, res, next) => {

	User.getUserByEmail(req.body.email, (err, res_user) => {
		if (err) {
			throw err;
		}
		if (res_user) {
			if (res_user.email === req.body.email) {
				return res.json({
					success: false,
					msg: 'User ' + req.body.email + ' already exists'
				});
			}
		}
		else {
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
		}
	});
});



// Authenticate
router.post('/authenticate', (req, res, next) => {

	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) => {
		if (err) {
			throw err;
		}
		if (!user) {
			return res.json({
				success: false,
				msg: 'User ' + email + ' not found'
			});
		}
		else {

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
						msg: 'Wrong password for user ' + email
					});
				}
			});
		}

	});
});


module.exports = router;