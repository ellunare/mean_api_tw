const mongoose = require('mongoose');
const config = require('../config/database');


// Task Schema
const TaskSchema = mongoose.Schema({
	id: {
		type: Number
	},
	line: {
		type: String
	},
	parentDeskId: {
		type: Number
	}
});

const collection = 'tasks';

const Task = module.exports = mongoose.model('Task', TaskSchema, collection);

// ----------------------------------------------------------------------

// Получаем последнее ID
module.exports.getLastTaskId = function (cb) {
	Task.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// Добавляем таск
module.exports.addTask = function (newTask, cb) {
	newTask.save(cb);
}

// Получаем все таски для доски
module.exports.getTasksForDesk = function (desk_id, cb) {
	const query = { parentDeskId: desk_id };
	Task.find(query).exec(cb);
}

// Поиск таска по ID
module.exports.getTaskById = function (id, cb) {
	const query = { id: id };
	Task.findOne(query, cb);
}

// Редактирование таска по ID
module.exports.editTask = function (data, cb) {
	const query = { id: data.id };
	const update = {
		$set: {
			"line": data.line
		}
	};
	Task.updateOne(query, update, cb);
}

// Удаление таска по ID
module.exports.deleteTask = function (id, cb) {
	const query = { id: id };
	Task.remove(query, cb);
}