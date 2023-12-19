<template>
   <section-container v-if="!errorMessage" title="Posts" :isLoading="isLoading">
      <template #tool-btn>
         <my-button @click="showModal = true" isIconBtn width="2rem" height="2rem">
            <plus-icon />
         </my-button>
      </template>

      <template #content>
         <div class="post-list">
            <div class="post-list__item" v-for="post in posts">
               <post-card :post="post" :key="post.id" />
            </div>
         </div>
      </template>
   </section-container>

   <p v-else class="error">{{ 'Unable to load posts: ' + errorMessage }}</p>

   <modal-window :show="showModal" @close="showModal = false" title="Post">
      <post-form @save="savePost" />
   </modal-window>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import PostCard from '@/components/PostCard';
import PostForm from '@/components/PostForm';
import PlusIcon from '@/assets/PlusIcon.vue'

export default {
   name: 'PostList',
   components: { PostCard, PlusIcon, PostForm, },
   computed: {
      ...mapState({
         posts: state => state.post.posts,
         isLoading: state => state.post.isLoading,
         errorMessage: state => state.post.errorMessage,
      })
   },
   data() {
      return {
         showModal: false
      }
   },
   methods: {
      ...mapActions({
         fetchPostsByUserId: 'post/fetchPostsByUserId',
         addPost: 'post/addPost'
      }),
      savePost(post) {
         this.addPost({post, userID: this.$route.params.id});
         this.showModal = false;
      },
   },
   mounted() {
      this.fetchPostsByUserId(this.$route.params.id);
   },
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
