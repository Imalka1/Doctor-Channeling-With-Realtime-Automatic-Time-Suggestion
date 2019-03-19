const express = require('express');
var router = express.Router();
var { Clinic } = require('../models/clinic')

router.post('/addClinic', (req, res) => {
    var clinic = new Clinic();
    clinic.date = req.body.date;
    clinic.time = req.body.time;
    clinic.patientsCount = req.body.patientsCount;
    clinic.status = req.body.status;
    clinic.save((err, doc) => {
        if (!err) {
            res.json(true)
        } else {
            res.json(false)
        }
    });
});

router.get('/getAllClinics', (req, res) => {
    Clinic.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
    })
});

module.exports = router;