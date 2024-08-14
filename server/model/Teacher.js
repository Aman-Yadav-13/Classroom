const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: String,
  id: { type: String, unique: true },
  password: String,
  classroomid: String
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
