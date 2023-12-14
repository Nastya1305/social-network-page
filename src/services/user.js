import api from './api';
import { USER, USERS } from '@/constants/api';

export async function getUsers() {
   const response = await api.get(USERS);
   return response.data;
}

export async function getUserById(id) {
   const response = await api.get(USER(id));
   return response.data;
}