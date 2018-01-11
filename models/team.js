const mongoose = require('mongoose');
const config = require('../config/database');


// Team Schema
const TeamSchema = mongoose.Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	}
});

const collection = 'teams';

const Team = module.exports = mongoose.model('Team', TeamSchema, collection);

// ----------------------------------------------------------------------

// Получаем последнее ID
module.exports.getLastTeamId = function (cb) {
	Team.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// Поиск команды по названию
module.exports.getTeamByName = function (name, cb) {
	const query = { name: name };
	Team.findOne(query, cb);
}

// Добавляем команду
module.exports.addTeam = function (newTeam, cb) {
	newTeam.save(cb);
}

// Получаем все команды
module.exports.getAllTeams = function (cb) {
	const query = {};
	Team.find(query, cb);
}

// Удаление команды по ID
module.exports.deleteTeam = function (id, cb) {
	const query = { id: id };
	Team.remove(query, cb);
}