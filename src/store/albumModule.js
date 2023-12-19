import { getAlbumsWithPhotos } from "@/services/album";

export const albumModule = {
   state: () => ({
      albums: [],
      isLoading: false,
   }),
   mutations: {
      setAlbums(state, albums) {
         state.albums = albums;
      },
      setLoading(state, isLoading) {
         state.isLoading = isLoading;
      },
      setErrorMessage(state, errorText) {
         state.errorMessage = errorText;
      }
   },
   actions: {
      async fetchAlbumsByUserId({ commit }, userId) {
         try {
            commit('setAlbums', undefined);
            commit('setLoading', true);
            commit('setErrorMessage', "");
            commit('setAlbums', await getAlbumsWithPhotos(userId))
         } catch (e) {
            commit('setErrorMessage', e);
         } finally {
            commit('setLoading', false);
         }
      },
   },
   namespaced: true
}