const { mongoose } = require('./db.js');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const patientController = require('./controllers/patientController');
const clinicController = require('./controllers/clinicController');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => { console.log('Express server started') });

app.use('/patients', patientController);
app.use('/clinics', clinicController);