<template>
  <div class="container wrapper">
    <h1 class="title">Users</h1>
    <user-list :users="users" v-if="!isUsersLoading" />
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersView',
  components: {
    UserList
  },
  computed: {
    ...mapState({
      users: state => state.user.users,
      isUsersLoading: state => state.user.isUsersLoading
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

.wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
}

.title {
  color: $teal;
  margin-bottom: 0.5em;

  @media (max-width: $media3 + px) {
    text-align: center;
  }
}
</style>