import axios from 'axios';
const baseUrl = '/users';

const register = async (newUser) => {
  const response = await axios.post(`${baseUrl}/register`, newUser);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${baseUrl}/login`, user);
  return response.data;
};

export default { register, login };
