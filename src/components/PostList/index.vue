<template>
   <section-container v-if="!errorMessage" title="Posts" :isLoading="isLoading" >
      <div class="post-list">
         <div class="post-list__item" v-for="post in posts">
            <post-card :post="post" :key="post.id" />
         </div>
      </div>
   </section-container>

   <p v-else class="error">{{ 'Unable to load posts: ' + errorMessage }}</p>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import PostCard from '@/components/PostCard';
import SectionContainer from '@/components/UI/SectionContainer'

export default {
   name: 'PostList',
   components: { PostCard, SectionContainer },
   computed: {
      ...mapState({
         posts: state => state.post.posts,
         isLoading: state => state.post.isLoading,
         errorMessage: state => state.post.errorMessage,
      })
   },
   methods: {
      ...mapActions({
         fetchPostsByUserId: 'post/fetchPostsByUserId',
      }),
   },
   mounted() {
      this.fetchPostsByUserId(this.$route.params.id);
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
