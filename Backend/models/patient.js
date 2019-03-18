const mongoose = require('mongoose');

var Patient = mongoose.model('Patient', {
    fullName: { type: String },
    email: { type: String }
})

module.exports = { Patient };