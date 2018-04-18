const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  role: { type: String, default: 'user' }, // ['admin', 'user']
  points: Number,
  userAddress: String,
  questionViews: Number,
  answerViews: Number,
  passHash: String,
});

module.exports = mongoose.model('user', userSchema);