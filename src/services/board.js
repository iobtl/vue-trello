import axios from 'axios';
const baseUrl = 'http://localhost:3000/boards';

let token = null;

const setToken = async (userToken) => {
  token = `Bearer ${userToken}`;
};

const getOne = async (boardName) => {
  const response = await axios.get(`${baseUrl}/${boardName}`);
  return response.data;
};

const getAll = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const createBoard = async (newBoard) => {
  const board = { title: newBoard };
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, board, config);
  return response.data;
};

const createList = async (currentBoard, listName) => {
  const list = { listName };
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(`${baseUrl}/${currentBoard}`, list, config);
  return response.data;
};

export default { setToken, getOne, getAll, createBoard, createList };
