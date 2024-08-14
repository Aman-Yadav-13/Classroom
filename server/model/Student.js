const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    name: String,
    id: { type: String, unique: true },
    password: String,
    classroomid: String,
    teacherid: String
  });

const Student = mongoose.model('Student', studentschema);

module.exports = Student;
