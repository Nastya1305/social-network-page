import axios from "axios";

export const userModule = {
   state: ()=> ({
      users: [],
      isUsersLoading: false,
   }),
   mutations: {
      setUsers(state, users) {
         state.users = users;
      },
      setLoading(state, isLoading) {
         state.isUsersLoading = isLoading;
      }
   },
   actions: {
      async fetchUsers({state, commit}) {
         try {
            commit('setLoading', true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            commit('setUsers', response.data)
         } catch(e) {
            alert(e)
         } finally {
            commit('setLoading', false);
         }
      }
   },
   namespaced: true
}