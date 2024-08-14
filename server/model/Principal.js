const mongoose = require('mongoose');

const principalSchema = new mongoose.Schema({
  id: String,
  password: String
});

const Principal = mongoose.model('Principal', principalSchema);

module.exports = Principal;
