const mongoose = require('mongoose');

var Clinic = mongoose.model('Clinic', {
    date: { type: String },
    time: { type: String },
    patientsCount: { type: Number },
    status: { type: String }
})

module.exports = { Clinic };