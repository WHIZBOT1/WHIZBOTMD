// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
