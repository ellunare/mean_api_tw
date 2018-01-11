const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');
const jwt = require('jsonwebtoken');

const PROTECT = passport.authenticate('jwt', { session: false });


// // // // // // // // // // // // // // // // // // // // // //

const Project = require('../models/project');

// Get Project For Team
router.get('/projects/:id', PROTECT, (req, res, next) => {
	let team_id = req.params.id;

	Project.getProjectsForTeam(team_id, (err, projects) => {
		if (err) {
			throw err;
		}
		if (!projects.length) {
			return res.json({
				success: false,
				msg: 'PROS Projects not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'PROS Projects send',
				data: projects
			});
		}
	});
	
});


// // Add Teams
// router.post('/team_add', PROTECT, (req, res, next) => {
// 	let name = req.body.name;

// 	// Есть ли такое название
// 	Team.getTeamByName(name, (err, team_check) => {
// 		if (err) {
// 			throw err;
// 		}
// 		if (!team_check) {
// 			// Назначаем новый id
// 			Team.getLastTeamId((err, lastTeam) => {
// 				if (err) {
// 					console.log('TEAS Cant find last team');
// 				}
// 				else {
// 					// Формируем новую команду
// 					let newTeam = new Team({
// 						id: lastTeam.id + 1,
// 						name: name,
// 					});

// 					Team.addTeam(newTeam, (err, team) => {
// 						if (err) {
// 							res.json({
// 								success: false,
// 								msg: 'TEAS Team creation error',
// 								data: null
// 							});
// 						}
// 						else {
// 							res.status(201).json({
// 								success: true,
// 								msg: 'TEAS Team ' + newTeam.name + ' added',
// 								data: newTeam
// 							});
// 						}
// 					});
// 				}
// 			});
// 		}
// 		else {
// 			res.json({
// 				success: false,
// 				msg: 'TEAS Team already exists',
// 				data: null
// 			});
// 		}
// 	});
// });


// // Delete Team By Id
// router.delete('/team/:id', PROTECT, (req, res, next) => {
// 	let id = req.params.id;

// 	Team.deleteTeam(id, (err, response) => {
// 		if (err) {
// 			throw err;
// 		}
// 		if (!response) {
// 			res.json({
// 				success: false,
// 				msg: 'TEAS Team not found'
// 			});
// 		}
// 		else {
// 			res.json({
// 				success: true,
// 				msg: 'TEAS Team ' + id + ' deleted'
// 			});
// 		}
// 	});
// });


module.exports = router;