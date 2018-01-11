const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.getUserByEmail(jwt_payload.data.email, (err, user) => {
			if(err){
				console.log('PASSPORT -- Error');
				return done(err, false);
			}
			if(user){
				// console.log('PASSPORT -- User');
				return done(null, user);
			}
			else {
				console.log('PASSPORT -- False');
				return done(null, false);
			}
		});
	}));
}