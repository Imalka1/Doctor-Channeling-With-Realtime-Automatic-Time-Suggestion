const mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String },
});

mongoose.model('Patient', patientSchema);