<template>
   <form class="post-form" @submit.prevent>
      <text-input label="Title" v-model="post.title" />
      <text-box label="Text" v-model="post.body"/>

      <my-button class="post-form__save-btn" @click="savePost" type="button">
         Save
      </my-button>
   </form>
</template>


<script>
export default {
   name: 'post-form',
   data() {
      return {
         post: {
            title: '',
            body: ''
         }
      }
   },
   methods: {
      savePost() {
         this.$emit('save', this.post)
         this.post = {
            title: '',
            body: ''
         }
      }
   },
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
