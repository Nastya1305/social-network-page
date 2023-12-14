import api from './api';
import { USER_ALBUMS, ALBUM_PHOTOS } from '@/constants/api';

export async function getAlbums(userId) {
   const response = await api.get(USER_ALBUMS(userId));
   return response.data;
}


export async function getAlbumsWithPhotos(userId) {
   const albums = await getAlbums(userId);

   const photosRequests = albums.map(album => api.get(ALBUM_PHOTOS(album.id)));
   const photosResponses = await Promise.all(photosRequests);

   albums.forEach((album, index) => {
      album.photos = photosResponses[index].data;
   });

   return albums;
}
