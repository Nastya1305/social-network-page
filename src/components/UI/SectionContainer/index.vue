<template>
   <section class="section">
      <header v-if="title" class="section__header">
         <slot name="tool-btn"></slot>
         <h2 class="section__title">{{ title }}</h2>
      </header>

      <slot v-if="!isLoading" name="content"></slot>

      <div class="section__loader">
         <fade-loader :loading="isLoading" :color="tealColor" />
      </div>
   </section>
</template>


<script>
import FadeLoader from 'vue-spinner/src/FadeLoader.vue';
import { teal } from '@/constants/colors';

export default {
   name: 'section-container',
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
