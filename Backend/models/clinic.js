const mongoose = require('mongoose');

var Clinic = mongoose.model('Clinic', {
    clinicDate: { type: Date },
    clinicTime: { type: String },
    patientsCount: { type: Number },
    status: { type: String },
    patients:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
})

module.exports = { Clinic };