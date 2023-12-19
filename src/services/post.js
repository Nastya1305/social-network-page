import api from './api';
import { POSTS } from '@/constants/api';

export async function getPosts(userId) {
   const response = await api.get(POSTS, {
      params: { userId }
   });
   return response.data;
}

export async function createPost(post, userId) {
   const response = await api.post(POSTS,
      {
         title: post.title,
         body: post.body,
         userId,
      }
   );
   return response.data;
}