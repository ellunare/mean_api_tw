const mongoose = require('mongoose');
const config = require('../config/database');


// Desk Schema
const DeskSchema = mongoose.Schema({
	id: {
		type: Number
	},
	line: {
		type: String
	},
	parentSectionId: {
		type: Number
	}
});

const collection = 'desks';

const Desk = module.exports = mongoose.model('Desk', DeskSchema, collection);

// ----------------------------------------------------------------------

// Получаем последнее ID
module.exports.getLastDeskId = function (cb) {
	Desk.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// Добавляем проект
module.exports.addDesk = function (newDesk, cb) {
	newDesk.save(cb);
}

// Получаем все доски для секции
module.exports.getDesksForSection = function (section_id, cb) {
	const query = { parentSectionId: section_id };
	Desk.find(query).exec(cb);
}

// Поиск проекта по ID
module.exports.getDeskById = function (id, cb) {
	const query = { id: id };
	Desk.findOne(query, cb);
}

// Редактирование доски по ID
module.exports.editDesk = function (data, cb) {
	const query = { id: data.id };
	const update = {
		$set: {
			"line": data.line
		}
	};
	Desk.updateOne(query, update, cb);
}

// Удаление доски по ID
module.exports.deleteDesk = function (id, cb) {
	const query = { id: id };
	Desk.remove(query, cb);
}