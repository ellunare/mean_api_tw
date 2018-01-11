const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');
const jwt = require('jsonwebtoken');

const PROTECT = passport.authenticate('jwt', { session: false });


// // // // // // // // // // // // // // // // // // // // // //

const User = require('../models/user');

// User By ID
router.get('/user/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	User.getUserById(id, (err, user) => {
		if (err) {
			throw err;
		}
		if (!user) {
			res.json({
				success: false,
				msg: 'USES User not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'USES User ' + user.email + ' info',
				data: user
			});
		}
	});
});


// Users By TeamId
router.get('/team_users/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	User.getTeamUsers(id, (err, teamUsers) => {
		if (err) {
			throw err;
		}
		if (!teamUsers) {
			res.json({
				success: false,
				msg: 'USES Users not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'USES Users for team' + id,
				data: teamUsers
			});
		}
	});
});


// Delete User From Team
router.put('/delete_from_team', PROTECT, (req, res, next) => {
	let user_id = req.body.user_id;
	let team_id = req.body.team_id;

	User.deleteFromTeam(user_id, team_id, (err, result) => {
		if (err) {
			throw err;
		}
		if (!result) {
			res.json({
				success: false,
				msg: 'USES User not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'USES User ' + user_id + ' deleted from team' + team_id,
				data: result
			});
		}
	});
});


// Add User To Team
router.put('/add_to_team', PROTECT, (req, res, next) => {
	let email = req.body.email;
	let team_id = req.body.team_id;

	// Есть ли такой пользователь
	User.getUserByEmail(email, (err, user) => {
		if (err) {
			throw err;
		}
		if (!user) {
			res.json({
				success: false,
				msg: 'USES User ' + email + ' not found',
				data: null
			});
		}
		else {
			// Он уже в текущей команде?
			let len = user.parentTeamId.length;
			for (let i = 0; i < len; i++) {
				if (user.parentTeamId[i] == team_id) {
					return res.json({
						success: false,
						msg: 'USES User ' + user.email + ' already in team' + team_id,
						data: null
					});
				}
			}

			// Добавляем пользователя
			User.addUserToTeam(email, team_id, (err, result) => {
				if (err) {
					throw err;
				}
				if (!result) {
					res.json({
						success: false,
						msg: 'USES User ' + email + ' not added to team ' + team_id,
						data: null
					});
				}
				else {
					res.json({
						success: true,
						msg: 'USES User ' + email + ' added to team' + team_id,
						data: result
					});
				}
			});
		}
	});
});


module.exports = router;