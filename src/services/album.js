import api from './api';

export async function getAlbums(userId) {
   const response = await api.get(`/users/${userId}/albums`);
   return response.data;
}


export async function getAlbumsWithPhotos(userId) {
   const albums = await getAlbums(userId);

   const photosRequests = albums.map(album => api.get(`/albums/${album.id}/photos`));
   const photosResponses = await Promise.all(photosRequests);
   
   albums.forEach((album, index) => {
      album.photos = photosResponses[index].data;
   });

   return albums;
}
