const mongoose = require('mongoose');

var ClinicPatients = mongoose.model('ClinicPatients', {
    clinicDate: {type: Date},
    clinicTime: {type: String},
    patientIds: {type: Array}
})

module.exports = {ClinicPatients};