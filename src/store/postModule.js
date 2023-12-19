import { getPosts, createPost } from "@/services/post";

export const postModule = {
   state: () => ({
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
      async fetchPostsByUserId({ commit }, userId) {
         try {
            commit('setPosts', undefined);
            commit('setLoading', true);
            commit('setErrorMessage', "");
            commit('setPosts', await getPosts(userId))
         } catch (e) {
            commit('setErrorMessage', e);
         } finally {
            commit('setLoading', false);
         }
      },
      async addPost({ state, commit }, {post, userID}) {
         try {
            const newPost = await createPost(post, userID);
            commit('setPosts', [...state.posts, newPost]);
         } catch (e) {
            commit('setErrorMessage', e);
         }
      },
   },
   namespaced: true
}