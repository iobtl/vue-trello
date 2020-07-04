const boardsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Board = require('../models/Board');
const User = require('../models/User');

boardsRouter.get('/', async (request, response) => {
  const boards = await Board.find({});
  return response.json(boards);
});

boardsRouter.post('/', async (request, response) => {
  const body = request.body;
  let token = request.headers.authorization;

  if (token.startsWith('Bearer ')) {
    token = jwt.verify(token.substring(7), process.env.SECRET_KEY);
  }

  if (!token) {
    return response.status(404).json({ error: 'invalid token' });
  }

  const user = await User.findById(token.id);

  const newBoard = new Board({ title: body.title });

  const savedBoard = await newBoard.save();
  user.boards = user.boards.concat(savedBoard._id);
  await user.save();
  return response.status(200).json({ message: 'board successfully created' });
});

module.exports = boardsRouter;
