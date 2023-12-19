<template>
   <router-link :to="path" class="link">
      <icon-base width="2rem" height="2rem" :hoverColor="lightTealColor">
         <slot></slot>
      </icon-base>
      
      {{ text }}
   </router-link>
</template>


<script>
import { lightTeal } from '@/constants/colors';

export default {
   name: 'LinkWithIcon',
   props: {
      text: {
         type: String,
         required: true
      },
      path: {
         type: String,
         required: true
      }
   },
   created() {
      this.lightTealColor = lightTeal;
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
