export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const USERS = '/users';
export const POSTS = '/posts';
export const ALBUMS = '/albums';
export const PHOTOS = '/photos';

export const USER = (id) => `${USERS}/${id}`;
export const USER_ALBUMS = (id) => `${USER(id)}${ALBUMS}`;

export const ALBUM_PHOTOS = (albumId) => `${ALBUMS}/${albumId}${PHOTOS}`;