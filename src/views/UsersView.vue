<template>
  <div class="container wrapper">
    <h1 class="title">Users</h1>

    <user-list v-if="!usersErrorMessage" :users="users" :isLoading="isUsersLoading" />
    <p  v-else class="error">{{ 'Unable to load users: ' + usersErrorMessage }}</p>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import UserList from '@/components/UserList'

export default {
  name: 'UsersView',
  components: {
    UserList
  },
  computed: {
    ...mapState({
      users: state => state.user.users,
      isUsersLoading: state => state.user.isLoading,
      usersErrorMessage: state => state.user.errorMessage,
    })
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetchUsers'
    }),
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/vars";
.title {
  color: $teal;
  margin-bottom: 0.5em;

  @media (max-width: $media3 + px) {
    text-align: center;
  }
}
</style>