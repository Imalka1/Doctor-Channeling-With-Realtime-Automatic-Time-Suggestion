const { mongoose } = require('./db.js');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var schedule = require('node-schedule');

const patientController = require('./controllers/patientController');
const clinicController = require('./controllers/clinicController');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => { console.log('Express server started') });

app.use('/patients', patientController);
app.use('/clinics', clinicController.router);

schedule.scheduleJob('59 59 23 * * *', function () {
    clinicController.flushOldClinics();
});