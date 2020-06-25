const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    String,
    required,
  },
  email: {
    String,
    required,
  },
  passwordHash: {
    String,
    required,
  },
});

module.exports = mongoose.Model('User', userSchema);
