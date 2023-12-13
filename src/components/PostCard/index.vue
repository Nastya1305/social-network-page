<template>
   <article class="post">
      <h3 class="post__title">{{ post.title }}</h3>
      <p class="post__body">{{ post.body }}</p>
   </article>
</template>


<script>
export default {
   name: 'PostCard',
   props: {
      post: {
         type: Object,
         required: true
      }
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
