const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

router.get('/addPatient', (req, res) => {
    addPatient(req, res);
});

function addPatient(req, res) {
    var patient = new Patient();
    patient.fullName = 'abc';
    patient.email = 'abc@gmail.com';
    patient.save((err, doc) => {
        if (!err) {
            console.log("Inserted success");
            res.json('asd')
        } else {
            console.log("Error in insertion");
        }
    });
}

module.exports = router;