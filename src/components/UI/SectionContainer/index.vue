<template>
   <section class="section">
      <h2 v-if="title" class="section__title">{{ title }}</h2>
      <div class="section__loader">
         <fade-loader :loading="isLoading" :color="tealColor" />
      </div>
      <slot v-if="!isLoading"></slot>
   </section>
</template>


<script>
import FadeLoader from 'vue-spinner/src/FadeLoader.vue';
import { teal } from '@/constants/colors';

export default {
   name: 'SectionContainer',
   components: {
      FadeLoader
   },
   props: {
      title: String,
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
