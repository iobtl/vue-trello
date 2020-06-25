require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./controllers/users');

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use('/users', usersRouter);

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

app.listen(PORT, () => {
  `Server running on ${PORT}`;
});
