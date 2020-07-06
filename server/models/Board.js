const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  lists: [
    {
      type: String,
    },
  ],
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
