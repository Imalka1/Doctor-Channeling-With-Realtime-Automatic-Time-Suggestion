const express = require('express');
var router = express.Router();
var { Clinic } = require('../models/clinic');

router.get('/add', (req, res) => {
    var clinic = new Clinic();
    clinic.clinicDate = '2019-03-06';
    clinic.clinicDateYear = '2019';
    clinic.clinicDateMonth = '3';
    clinic.clinicDateDay = '6';
    clinic.clinicTime = '10:10';
    clinic.patientsCount = 3;
    clinic.status = "Pending";
    clinic.save((err, doc) => {
        if (!err) {
            res.json(clinic)
        } else {
            res.json(undefined)
        }
    });
});

router.post('/addClinic', (req, res) => {
    var clinic = new Clinic();
    clinic.clinicDate = req.body.clinicDate;
    clinic.clinicDateYear = req.body.clinicDateYear;
    clinic.clinicDateMonth = req.body.clinicDateMonth;
    clinic.clinicDateDay = req.body.clinicDateDay;
    clinic.clinicTime = req.body.clinicTime;
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

router.post('/getAllClinicsViaYearAndMonth', (req, res) => {
    console.log(req.body)
    Clinic.find({
        clinicDateYear: req.body.clinicDateYear,
        clinicDateMonth: req.body.clinicDateMonth
    }, (err, docs) => {
        if (!err) {
            console.log(docs)
            res.send(docs);
        } else {
            console.log(err)
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