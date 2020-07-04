import axios from 'axios';
const baseUrl = 'http://localhost:3000/boards';

let token = null;

const setToken = async (userToken) => {
  token = `Bearer ${userToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newBoard) => {
  const board = { title: newBoard };
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, board, config);
  return response.data;
};

export default { setToken, getAll, create };
