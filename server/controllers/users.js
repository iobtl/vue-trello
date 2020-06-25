const usersRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

usersRouter.post('/', async (request, response, next) => {
  const body = request.body;

  if (body.password.length < 3) {
    response.status(400).json({ error: 'Password is too short' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    username: body.username,
    email: body.email,
    passwordHash,
  });

  await newUser.save();
  response.status(200).json(newUser);
});

module.exports = usersRouter;
