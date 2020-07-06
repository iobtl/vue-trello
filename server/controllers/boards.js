const boardsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Board = require('../models/Board');
const User = require('../models/User');

const verifyToken = (token) => {
  if (token.startsWith('Bearer ')) {
    token = jwt.verify(token.substring(7), process.env.SECRET_KEY);
    if (!token) {
      return null;
    } else {
      return token;
    }
  }
};

boardsRouter.get('/', async (request, response) => {
  const boards = await Board.find({});
  return response.json(boards);
});

boardsRouter.get('/:board', async (request, response) => {
  const board = await Board.findOne({ title: request.params.board });
  return response.json(board);
});

boardsRouter.get('/:id', async (request, response) => {
  const boards = await Board.find({ user: request.params.id });
  return response.json(boards);
});

boardsRouter.post('/', async (request, response) => {
  const body = request.body;
  let token = request.headers.authorization;

  const verifiedToken = verifyToken(token);

  if (!verifiedToken) {
    return response.status(404).json({ error: 'invalid token' });
  }

  const user = await User.findById(verifiedToken.id);

  const newBoard = new Board({ title: body.title, user: user._id });
  const savedBoard = await newBoard.save();

  user.boards = user.boards.concat(savedBoard._id);
  await user.save();

  return response.status(200).json({ message: 'board successfully created' });
});

boardsRouter.post('/:board', async (request, response) => {
  const body = request.body;
  let token = request.headers.authorization;

  const verifiedToken = verifyToken(token);

  if (!verifiedToken) {
    return response.status(404).json({ error: 'invalid token' });
  }

  const board = await Board.findOne({ title: request.params.board });
  console.log(board);
  board.lists = board.lists.concat(body.listName);
  await board.save();

  return response.status(200).json({ message: 'list successfully created' });
});

module.exports = boardsRouter;
