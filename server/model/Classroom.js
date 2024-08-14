const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  id: String,
  name: String
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
