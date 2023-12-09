<template>
  <div class="cards">
    <div class="cards__item" v-for="user in users">
      <user-card :user="user" :key="user.id" />
    </div>
  </div>
</template>


<script>
import UserCard from '@/components/UserCard/UserCard.vue'

export default {
  name: 'UserList',
  components: { UserCard },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/styles/vars";

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  &__item {
    padding: 10px;
    display: flex;
    justify-content: center;

    flex: 0 1 50%;
    @media (max-width: $media2 + px) {
      flex: 1 0 100%;
    }
  }
}
</style>
