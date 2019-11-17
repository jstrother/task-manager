import axios from 'axios';

export default {
  getAll() {
    return axios.get('/api/boards').then(res => res.data);
  },
  findById(boardId) {
    return axios.get(`/api/boards/${boardId}`).then(res => res.data);
  },
};
