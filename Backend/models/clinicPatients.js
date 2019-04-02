const mongoose = require('mongoose');

var ClinicPatients = mongoose.model('ClinicPatients', {
    patientId: { type: ObjectId },
    clinicTime: { type: String },
    clinicDate: { type: Date }
})

module.exports = { ClinicPatients };