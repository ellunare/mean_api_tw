const mongoose = require('mongoose');
const config = require('../config/database');

const bcrypt = require('bcryptjs');


// User Schema
const UserSchema = mongoose.Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	parentTeamId: {
		type: [Number]
	},
	avatar: {
		type: String
	}
});

const collection = 'users';

const User = module.exports = mongoose.model('User', UserSchema, collection);

// Для регистрации и аутентификации

// Ищем последнего пользователя и берем его ID для назначения на 1 больше новому пользователю
module.exports.getLastUserId = function (cb) {
	User.findOne({}, {}, { sort: { 'id': -1 } }, cb);
}

// При добавлении польователя хешируем пароль
module.exports.addUser = function (newUser, cb) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) {
				throw err;
			}
			newUser.password = hash;
			newUser.save(cb);
		});
	});
}

// Проверяем пароль
module.exports.comparePassword = function (candidatePassword, hash, cb) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) {
			throw err;
		}
		cb(null, isMatch);
	});
}

// ----------------------------------------------------------------------

// Поиск пользователя по email
module.exports.getUserByEmail = function (email, cb) {
	const query = { email: email };
	User.findOne(query, cb);
}

// Отдаем user по ID
module.exports.getUserById = function (id, cb) {
	const query = { id: id };
	User.findOne(query, cb);
}

// Отдаем пользоваетелей принадлежащих команде с Parent ID пользователя
module.exports.getTeamUsers = function (team_id, cb) {
	const query = { parentTeamId: team_id };
	User.find(query).exec(cb);
}

// Удаляем пользователя из команды по его Id
module.exports.deleteFromTeam = function (user_id, team_id, cb) {
	const query = { id: user_id, parentTeamId: team_id };
	const set = { $set: { "parentTeamId.$": 0 } };
	User.findOneAndUpdate(query, set, cb);
}

// Добавляем пользователя в команду по email
module.exports.addUserToTeam = function (user_email, team_id, cb) {
	const query = { email: user_email };
	const set = { $push: { parentTeamId: team_id } };
	User.findOneAndUpdate(query, set, cb);
}