const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Connecting to MongoDB');
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Error connecting to MongoDB'));

app.get('/', (request, response) => {
  response.json({ message: 'hello' });
});

app.listen(PORT, () => {
  `Server running on ${PORT}`;
});
