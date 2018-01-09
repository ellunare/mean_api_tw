var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://valerii:90optical@ds247407.mlab.com:47407/teamwork', [
	'tasks'
]);

// CORS
router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Get All Tasks
router.get('/tasks', function (req, res, next) {
	db.tasks.find(function (err, tasks) {
		if (err) {
			res.send(err);
		}
		res.json(tasks);
	});
});

// Get Single Task
router.get('/task/:id', function (req, res, next) {
	db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
});

// Save Task
router.post('/task', function (req, res, next) {
	var task = req.body;
	if (!task.title || !(task.isDone + '')) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		})
	} else {
		db.tasks.save(task, function (err, task) {
			if (err) {
				res.send(err);
			}
			res.json(task);
		})
	}
});

// Delete Task
router.delete('/task/:id', function (req, res, next) {
	db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
});

// Update Task
router.put('/task/:id', function (req, res, next) {
	var task = req.body;
	var updTask = {};

	if (task.isDone) {
		updTask.isDone = task.isDone;
	}

	if (task.title) {
		updTask.title = task.title;
	}

	if (!updTask) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {

		db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
			if (err) {
				res.send(err);
			}
			res.json(task);
		});

	}

});

module.exports = router;