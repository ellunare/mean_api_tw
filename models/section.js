const mongoose = require('mongoose');
const config = require('../config/database');

// Section Schema
const SectionSchema = mongoose.Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	},
	description: {
		type: String
	},
	parentProjectId: {
		type: Number
	}

});

const collection = 'sections';

const Section = module.exports = mongoose.model('Section', SectionSchema, collection);

// ----------------------------------------------------------------------

// Получаем последнее ID
module.exports.getLastSectionId = function (cb) {
	Section.findOne({}, {}, { sort: { 'id': -1 } }).exec(cb);
}

// Добавляем секцию
module.exports.addSection = function (newSection, cb) {
	newSection.save(cb);
}

// // Инициализируем 3мя секциями проект
// module.exports.initialize = function (newSections, cb) {
// 	Section.insertMany(newSections).exec(cb);
// }

// Получаем все секции для проекта
module.exports.getSectionsForProject = function (project_id, cb) {
	const query = { parentProjectId: project_id };
	Section.find(query, cb);
}

// Удаление секциий по ID родителя
module.exports.deleteSectionsByParent = function (project_id, cb) {
	const query = { parentProjectId: project_id };
	Section.remove(query, cb);
}

// // Удаление проекта по ID
// module.exports.deleteProject = function (id, cb) {
// 	const query = { id: id };
// 	Project.remove(query, cb);
// }

// // Поиск команды по названию
// module.exports.getTeamByName = function (name, cb) {
// 	const query = { name: name };
// 	Team.findOne(query, cb);
// }

module.exports.DEF_sections = [
	{
		id: -1,
		name: 'FRONT-END',
		description: 'Front-end section',
		parentProjectId: -1
	},
	{
		id: -1,
		name: 'BACK-END',
		description: 'Back-end section',
		parentProjectId: -1
	},
	{
		id: -1,
		name: 'DESIGN',
		description: 'Design section',
		parentProjectId: -1
	}
];