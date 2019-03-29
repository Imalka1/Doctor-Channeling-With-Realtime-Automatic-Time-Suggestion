const express = require('express');
var router = express.Router();
var { Clinic } = require('../models/clinic');

router.get('/add', (req, res) => {
    var clinic = new Clinic();
    clinic.clinicDate = new Date('2019-03-03');
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

router.post('/cancelClinic', (req, res) => {
    Clinic.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status }, { useFindAndModify: false }, (err, doc) => {
        if (!err) {
            res.json(true)
        } else {
            console.log(err)
            res.json(false)
        }
    })
});

router.post('/removeClinic', (req, res) => {
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
    var yearIndex = parseInt(req.body.clinicDate.split('-')[0].trim());
    var monthIndex = parseInt(req.body.clinicDate.split('-')[1].trim());
    Clinic.aggregate([
        { $project: { clinicTime: 1, patientsCount: 1, status: 1, clinicDate: 1, month: { $month: '$clinicDate' }, year: { $year: '$clinicDate' } } },
        { $match: { month: monthIndex, year: yearIndex } }
    ], (err, docs) => {
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