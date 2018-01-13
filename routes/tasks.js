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


// Get Task By Id
router.get('/task/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	Task.getTaskById(id, (err, task) => {
		if (err) {
			throw err;
		}
		if (!task) {
			res.json({
				success: false,
				msg: 'TASS Task not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'TASS Task ' + id + ' send',
				data: task
			});
		}
	});

});


// Add Task
router.post('/create', PROTECT, (req, res, next) => {

	Task.getLastTaskId((err, lastTask) => {
		if (err) {
			console.log('TASS Cant find last task');
		}
		else {
			// Формируем новый таск
			let t = req.body;

			let newTask = new Task({
				id: lastTask.id + 1,
				line: t.line,
				parentDeskId: t.parentDeskId
			});

			Task.addTask(newTask, (err, new_task) => {
				if (err) {
					res.json({
						success: false,
						msg: 'TASS Task creation error',
						data: null
					});
				}
				else {
					res.status(201).json({
						success: true,
						msg: 'TASS Task ' + new_task.id + ' added',
						data: new_task
					});
				}
			});

		}
	});

});


// Edit Task By Id
router.put('/edit', PROTECT, (req, res, next) => {
	let data = req.body;

	Task.editTask(data, (err, result) => {
		if (err) {
			throw err;
		}
		if (!result.n) {
			res.json({
				success: false,
				msg: 'TASS Task not found'
			});
		}
		else {
			res.json({
				success: true,
				msg: 'TASS Task ' + data.id + ' edit'
			});
		}
	});
});


// Delete Task By Id
router.delete('/delete/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	Task.deleteTask(id, (err, result) => {
		if (err) {
			throw err;
		}
		if (!result.result.n) {
			res.json({
				success: false,
				msg: 'TASS Task not found'
			});
		}
		else {
			res.json({
				success: true,
				msg: 'TASS Task ' + id + ' deleted'
			});
		}
	});
});


module.exports = router;