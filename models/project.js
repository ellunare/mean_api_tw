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

// // Получаем последнее ID
// module.exports.getLastTeamId = function (cb) {
// 	Team.findOne({}, {}, { sort: { 'id': -1 } }, cb);
// }

// // Поиск команды по названию
// module.exports.getTeamByName = function (name, cb) {
// 	const query = { name: name };
// 	Team.findOne(query, cb);
// }

// // Добавляем команду
// module.exports.addTeam = function (newTeam, cb) {
// 	newTeam.save(cb);
// }

// Получаем все проекты для команды
module.exports.getProjectsForTeam = function (team_id, cb) {
	const query = { parentTeamId: team_id };
	Project.find(query, cb);
}

// // Удаление команды по ID
// module.exports.deleteTeam = function (id, cb) {
// 	const query = { id: id };
// 	Team.remove(query, cb);
// }