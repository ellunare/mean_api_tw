const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
	console.log('Database error ' + err);
});


const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS MW
app.use(cors());

// Set Static Folder
// public - folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser MW
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Passport MW
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/users', users);

// Start Server
app.listen(port, () => {
	console.log('Server started on port ' + port);
});



// const index = require('./routes/index');
// const tasks = require('./routes/tasks');

// View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);


// app.use('/', index);
// app.use('/api', tasks);
