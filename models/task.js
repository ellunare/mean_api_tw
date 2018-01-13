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

// // Получаем последнее ID
// module.exports.getLastDeskId = function (cb) {
// 	Desk.findOne({}, {}, { sort: { 'id': -1 } }, cb);
// }

// // Добавляем проект
// module.exports.addDesk = function (newDesk, cb) {
// 	newDesk.save(cb);
// }

// Получаем все таски для доски
module.exports.getTasksForDesk = function (desk_id, cb) {
	const query = { parentDeskId: desk_id };
	Task.find(query).exec(cb);
}

// // Поиск проекта по ID
// module.exports.getDeskById = function (id, cb) {
// 	const query = { id: id };
// 	Desk.findOne(query, cb);
// }

// // Редактирование доски по ID
// module.exports.editDesk = function (data, cb) {
// 	const query = { id: data.id };
// 	const update = {
// 		$set: {
// 			"line": data.line
// 		}
// 	};
// 	Desk.updateOne(query, update, cb);
// }

// // Удаление доски по ID
// module.exports.deleteDesk = function (id, cb) {
// 	const query = { id: id };
// 	Desk.remove(query, cb);
// }