<template>
  <div v-if="users" class="cards">
    <div class="cards__item" v-for="user in users">
      <router-link :to="'/users/' + user.id" :key="user.id">
        <user-card class="cards__card" :user="user" />
      </router-link>
    </div>
  </div>
  <fade-loader class="loader" :loading="isLoading" :color="tealColor" />
</template>


<script>
import UserCard from '@/components/UserCard'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import { teal } from '@/constants/colors';

export default {
  name: 'UserList',
  components: { UserCard, FadeLoader },
  props: {
    users: Array,
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.tealColor = teal;
  }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
