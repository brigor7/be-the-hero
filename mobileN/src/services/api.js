import axios from 'axios';
//<servidor>: 192.168.X.X - Ver no ipconfig no windows
const servidor = '192.168.11.6';
const porta = '3333';

const api = axios.create({
  baseURL: `http://${servidor}:${porta}`,
});

export default api;
