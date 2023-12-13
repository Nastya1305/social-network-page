<template>
  <div class="user-info container wrapper">
    <link-with-icon text="to Users page" path="/"><arrow-icon /></link-with-icon>

    <user-card v-if="!userErrorMessage" :user="user" :isLoading="isUserLoading" />
    <p v-else class="error">{{ 'Unable to load user data: ' + userErrorMessage }}</p>

    <router-view name="posts"/>
    <router-view name="albums"/>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import UserCard from '@/components/UserCard';
import LinkWithIcon from '@/components/LinkWithIcon';
import ArrowIcon from '@/assets/ArrowIcon.vue';

export default {
  name: 'UserInfoView',
  components: {
    UserCard,
    LinkWithIcon,
    ArrowIcon
  },
  computed: {
    ...mapState({
      user: state => state.user.curUser,
      isUserLoading: state => state.user.isLoading,
      userErrorMessage: state => state.user.errorMessage,
    })
  },
  methods: {
    ...mapActions({
      fetchCurUser: 'user/fetchCurUser',
    }),
  },
  mounted() {
    this.fetchCurUser(this.$route.params.id);
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/vars";

.user-info {
  *:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>