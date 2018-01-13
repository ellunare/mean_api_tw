const mongoose = require('mongoose');
const config = require('../config/database');


// Comment Schema
const CommentSchema = mongoose.Schema({
	id: {
		type: Number
	},
	text: {
		type: String
	},
	parentTaskId: {
		type: Number
	},
	parentUserId: {
		type: Number
	}
});

const collection = 'comments';

const Comment = module.exports = mongoose.model('Comment', CommentSchema, collection);

// ----------------------------------------------------------------------

// // Получаем последнее ID
// module.exports.getLastDeskId = function (cb) {
// 	Desk.findOne({}, {}, { sort: { 'id': -1 } }, cb);
// }

// // Добавляем проект
// module.exports.addDesk = function (newDesk, cb) {
// 	newDesk.save(cb);
// }

// Получаем все комменты для таска
module.exports.getCommentsForTask = function (task_id, cb) {
	const query = { parentTaskId: task_id };
	Comment.find(query).exec(cb);
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