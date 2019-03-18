const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DoctorChanneling', (err) => {
    if (!err) { console.log("MongoDB started") }
    else { console.log("Error in connection" + err) }
})

module.exports = mongoose;