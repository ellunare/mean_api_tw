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


// Get Project By Id
// , PROTECT
router.get('/project/:id', (req, res, next) => {
	let id = req.params.id;

	Project.getProjectById(id, (err, project) => {
		if (err) {
			throw err;
		}
		if (!project) {

			return res.json({
				success: false,
				msg: 'PROS Project not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'PROS Project ' + id + ' send',
				data: project
			});
		}
	});

});


// Add Project
router.post('/project_add', PROTECT, (req, res, next) => {

	Project.getLastProjectId((err, lastProject) => {
		if (err) {
			console.log('TEAS Cant find last team');
		}
		else {
			// Формируем новую команду
			let p = req.body;

			let newProject = new Project({
				id: lastProject.id + 1,
				name: p.name,
				description: p.description,
				color: p.color,
				parentTeamId: p.parentTeamId,
				userFavId: []
			});

			Project.addProject(newProject, (err, new_project) => {
				if (err) {
					res.json({
						success: false,
						msg: 'PROS Project creation error',
						data: null
					});
				}
				else {
					res.status(201).json({
						success: true,
						msg: 'PROS Project ' + new_project.name + ' added',
						data: new_project
					});
				}
			});

		}
	});

});


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