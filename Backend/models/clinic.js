const mongoose = require('mongoose');

var Clinic = mongoose.model('Clinic', {
    clinicDate: { type: Date },
    clinicTime: { type: String },
    patientsCount: { type: Number },
    status: { type: String }
})

module.exports = { Clinic };