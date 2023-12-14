import api from './api';
import { POSTS } from '@/constants/api';

export async function getPosts(userId) {
   const response = await api.get(POSTS, {
      params: { userId }
   });
   return response.data;
}

