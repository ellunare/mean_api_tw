const mongoose = require('mongoose');
const config = require('../config/database');


// Project Schema
const ProjectSchema = mongoose.Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	},
	description: {
		type: String
	},
	color: {
		type: String
	},
	parentTeamId: {
		type: Number
	},
	userFavId: {
		type: [Number]
	}
});

const collection = 'projects';

const Project = module.exports = mongoose.model('Project', ProjectSchema, collection);

// ----------------------------------------------------------------------

// Получаем последнее ID
module.exports.getLastProjectId = function (cb) {
	Project.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// Добавляем проект
module.exports.addProject = function (newProject, cb) {
	newProject.save(cb);
}

// Получаем все проекты для команды
module.exports.getProjectsForTeam = function (team_id, cb) {
	const query = { parentTeamId: team_id };
	Project.find(query).exec(cb);
}

// Удаление проекта по ID
module.exports.deleteProject = function (id, cb) {
	const query = { id: id };
	Project.remove(query, cb);
}

// Поиск проекта по ID
module.exports.getProjectById = function (project_id, cb) {
	const query = { id: project_id };
	Project.findOne(query, cb);
}