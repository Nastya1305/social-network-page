import { getPosts } from "@/services/post";

export const postModule = {
   state: ()=> ({
      posts: [],
      isLoading: false,
   }),
   mutations: {
      setPosts(state, posts) {
         state.posts = posts;
      },
      setLoading(state, isLoading) {
         state.isLoading = isLoading;
      },
      setErrorMessage(state, errorText) {
         state.errorMessage = errorText;
      }
   },
   actions: {
      async fetchPostsByUserId({state, commit}, userId) {
         try {
            commit('setPosts', undefined);
            commit('setLoading', true);
            commit('setErrorMessage', "");
            commit('setPosts', await getPosts(userId))
         } catch(e) {
            commit('setErrorMessage', e);
         } finally {
            commit('setLoading', false);
         }
      },
   },
   namespaced: true
}