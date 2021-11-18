const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    name: String,
    idStudent: String,
    birthday: String,
    phone: String,
    createAt: {type:Date, default:Date.now},
    UpdateAt: {type:Date, default:Date.now},

});

module.exports = mongoose.model('Student', Student);