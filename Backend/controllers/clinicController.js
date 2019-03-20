const express = require('express');
var router = express.Router();
var { Clinic } = require('../models/clinic');

router.post('/addClinic', (req, res) => {
    var clinic = new Clinic();
    clinic.date = req.body.date;
    clinic.time = req.body.time;
    clinic.patientsCount = req.body.patientsCount;
    clinic.status = req.body.status;
    clinic.save((err, doc) => {
        if (!err) {
            res.json(clinic)
        } else {
            res.json(undefined)
        }
    });
});

router.post('/updateClinic', (req, res) => {
    Clinic.findOneAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false }, (err, doc) => {
        if (!err) {
            res.json(true)
        } else {
            console.log(err)
            res.json(false)
        }
    })
});

router.post('/removeClinic', (req, res) => {
    console.log(req.body._id)
    Clinic.findByIdAndDelete({ _id: req.body._id }, (err, doc) => {
        if (!err) {
            res.json(true)
        } else {
            console.log(err)
            res.json(false)
        }
    })
});

router.get('/getAllClinics', (req, res) => {
    Clinic.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
    })
});

function updateClinics() {
    console.log('The world is going to end today.');
};

module.exports = {
    router: router,
    updateClinics: updateClinics
}