const mongoose = require('mongoose');

var Clinic = mongoose.model('Clinic', {
    clinicDate: { type: String },
    clinicDateYear: { type: Number },
    clinicDateMonth: { type: Number },
    clinicDateDay: { type: Number },
    clinicTime: { type: String },
    patientsCount: { type: Number },
    status: { type: String }
})

module.exports = { Clinic };