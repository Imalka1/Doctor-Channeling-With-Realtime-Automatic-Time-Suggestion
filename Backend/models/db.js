const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DoctorChanneling', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB started") }
    else { console.log("Error in connection" + err) }
})

require('./patient.model');