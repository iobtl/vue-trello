const usersRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

usersRouter.post('/register', async (request, response, next) => {
  const body = request.body;

  if (body.password.length < 3 || body.username.length < 3) {
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

usersRouter.post('/login', async (request, response, next) => {
  const body = request.body;

  const user = await User.findOne({ username: body.username });
  console.log(user);

  const match =
    user && (await bcrypt.compare(body.password, user.passwordHash));

  if (match) {
    response.status(200).json({ message: 'Successfully logged in' });
  } else {
    response.status(400).json({ error: 'Incorrect username or password' });
  }
});

module.exports = usersRouter;
