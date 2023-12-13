import api from './api';

export async function getPosts(userId) {
   const response = await api.get(`/posts`, {
      params: { userId }
   });
   return response.data;
}

