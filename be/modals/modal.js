const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
        }
    }
)

//models
const Emp = mongoose.model('employees', dbSchema);

module.exports = Emp;