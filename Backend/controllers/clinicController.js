const express = require('express');
var router = express.Router();
var { Clinic } = require('../models/clinic')

router.get('/addClinic', (req, res) => {
    addClinic(req, res);
});

router.get('/getAllClinics', (req, res) => {
    Clinic.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
    })
});

function addClinic(req, res) {
    var clinic = new Clinic();
    clinic.date = '2018-02-03';
    clinic.time = "02:03";
    clinic.patientsCount = 25;
    clinic.status = "Pending";
    clinic.save((err, doc) => {
        if (!err) {
            console.log("Inserted success");
            res.json(clinic)
        } else {
            console.log("Error in insertion");
        }
    });
}

module.exports = router;