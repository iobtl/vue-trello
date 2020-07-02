require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./controllers/users');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`Connecting to MongoDB on port ${PORT}`);
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Error connecting to MongoDB'));

app.listen(PORT, () => {
  `Server running on ${PORT}`;
});
