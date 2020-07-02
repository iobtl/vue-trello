const usersRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  return response.json(users);
});

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

  const match =
    user && (await bcrypt.compare(body.password, user.passwordHash));

  if (match) {
    const userForToken = {
      username: user.username,
      id: user._id,
    };
    const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    response.status(200).json({ token, username: user.username });
  } else {
    response.status(400).json({ error: 'Incorrect username or password' });
  }
});

module.exports = usersRouter;
