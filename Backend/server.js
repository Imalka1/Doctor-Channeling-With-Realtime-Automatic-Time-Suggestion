const { mongoose } = require('./db.js');

const express = require('express');
const bodyParser = require('body-parser');

const patientController = require('./controllers/patientController');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => { console.log('Express server started') });

app.use('/patients', patientController);