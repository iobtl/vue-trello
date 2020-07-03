const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

boardSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

boardSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Board', boardSchema);
