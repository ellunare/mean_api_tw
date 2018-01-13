const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');

const PROTECT = passport.authenticate('jwt', { session: false });

// // // // // // // // // // // // // // // // // // // // // //

const Task = require('../models/task');

// Get Tasks For Desk
router.get('/desk/:id', PROTECT, (req, res, next) => {
	let desk_id = req.params.id;

	Task.getTasksForDesk(desk_id, (err, tasks) => {
		if (err) {
			throw err;
		}
		if (!tasks.length) {
			res.json({
				success: false,
				msg: 'TASS Tasks not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'TASS Tasks send',
				data: tasks
			});
		}
	});

});


// // Get Desk By Id
// router.get('/desk/:id', PROTECT, (req, res, next) => {
// 	let id = req.params.id;

// 	Desk.getDeskById(id, (err, desk) => {
// 		if (err) {
// 			throw err;
// 		}
// 		if (!desk) {

// 			return res.json({
// 				success: false,
// 				msg: 'DESS Desk not found',
// 				data: null
// 			});
// 		}
// 		else {
// 			res.json({
// 				success: true,
// 				msg: 'DESS Desk ' + id + ' send',
// 				data: desk
// 			});
// 		}
// 	});

// });


// // Add Desk
// router.post('/create', PROTECT, (req, res, next) => {

// 	Desk.getLastDeskId((err, lastDesk) => {
// 		if (err) {
// 			console.log('DESS Cant find last desk');
// 		}
// 		else {
// 			// Формируем новую команду
// 			let d = req.body;

// 			let newDesk = new Desk({
// 				id: lastDesk.id + 1,
// 				line: d.line,
// 				parentSectionId: d.parentSectionId
// 			});

// 			Desk.addDesk(newDesk, (err, new_desk) => {
// 				if (err) {
// 					res.json({
// 						success: false,
// 						msg: 'DESS Desk creation error',
// 						data: null
// 					});
// 				}
// 				else {
// 					res.status(201).json({
// 						success: true,
// 						msg: 'DESS Desk ' + new_desk.id + ' added',
// 						data: new_desk
// 					});
// 				}
// 			});

// 		}
// 	});

// });


// // Edit Desk By Id
// router.put('/edit', PROTECT, (req, res, next) => {
// 	let data = req.body;

// 	Desk.editDesk(data, (err, result) => {
// 		console.log(result);
// 		if (err) {
// 			throw err;
// 		}
// 		if (!result.n) {
// 			res.json({
// 				success: false,
// 				msg: 'DESS Desk not found'
// 			});
// 		}
// 		else {
// 			res.json({
// 				success: true,
// 				msg: 'DESS Desk ' + data.id + ' edit'
// 			});
// 		}
// 	});
// });


// // Delete Desk By Id
// router.delete('/delete/:id', PROTECT, (req, res, next) => {
// 	let id = req.params.id;

// 	Desk.deleteDesk(id, (err, result) => {
// 		if (err) {
// 			throw err;
// 		}
// 		if (!result.result.n) {
// 			res.json({
// 				success: false,
// 				msg: 'DESS Desk not found'
// 			});
// 		}
// 		else {
// 			res.json({
// 				success: true,
// 				msg: 'DESS Desk ' + id + ' deleted'
// 			});
// 		}
// 	});
// });


module.exports = router;