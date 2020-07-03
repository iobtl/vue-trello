import axios from 'axios';
const baseUrl = 'http://localhost:3000/boards';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newBoard) => {
  const board = { title: newBoard };
  const response = await axios.post(baseUrl, board);
  return response.data;
};

export default { getAll, create };
