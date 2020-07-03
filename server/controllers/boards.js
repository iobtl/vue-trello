const boardsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Board = require('../models/Board');

boardsRouter.get('/', async (request, response) => {
  const boards = await Board.find({});
  return response.json(boards);
});

boardsRouter.post('/', async (request, response) => {
  const body = request.body;
  console.log(body);

  const newBoard = new Board({ title: body.title });

  await newBoard.save();
  return response.status(200).json({ message: 'board successfully created' });
});

module.exports = boardsRouter;
