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

// Получаем последнее ID
module.exports.getLastCommentId = function (cb) {
	Comment.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// Добавляем комментарий
module.exports.addComment = function (newComment, cb) {
	newComment.save(cb);
}

// Получаем все комменты для таска
module.exports.getCommentsForTask = function (task_id, cb) {
	const query = { parentTaskId: task_id };
	Comment.find(query).exec(cb);
}

// Поиск коммента по ID
module.exports.getCommentById = function (id, cb) {
	const query = { id: id };
	Comment.findOne(query, cb);
}

// Редактирование коммента по ID
module.exports.editComment = function (data, cb) {
	const query = { id: data.id };
	const update = {
		$set: {
			"text": data.text
		}
	};
	Comment.updateOne(query, update, cb);
}

// Удаление коммента по ID
module.exports.deleteComment = function (id, cb) {
	const query = { id: id };
	Comment.remove(query, cb);
}