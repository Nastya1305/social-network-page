import { getUsers, getUserById } from "@/services/user";

export const userModule = {
   state: () => ({
      users: [],
      curUser: undefined,
      isLoading: false,
      errorMessage: ''
   }),
   mutations: {
      setUsers(state, users) {
         state.users = users;
      },
      setLoading(state, isLoading) {
         state.isLoading = isLoading;
      },
      setCurUser(state, user) {
         state.curUser = user;
      },
      setErrorMessage(state, errorText) {
         state.errorMessage = errorText;
      }
   },
   actions: {
      async fetchUsers({ state, commit }) {
         try {
            commit('setLoading', true);
            commit('setErrorMessage', "");
            commit('setUsers', await getUsers())
         } catch (e) {
            commit('setErrorMessage', e);
         } finally {
            commit('setLoading', false);
         }
      },

      async fetchCurUser({ state, commit }, userId) {
         try {
            commit('setCurUser', undefined);
            commit('setLoading', true);
            commit('setErrorMessage', "");
            commit('setCurUser', await getUserById(userId))
         } catch (e) {
            console.log(e)
            commit('setErrorMessage', e);
         } finally {
            commit('setLoading', false);
         }
      }
   },
   namespaced: true
}