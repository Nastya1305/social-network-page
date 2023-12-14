<template>
   <router-link :to="path" class="link">
      <icon-base width="2rem" height="2rem" :iconColor="tealColor" :hoverColor="lightTealColor">
         <slot></slot>
      </icon-base>
      {{ text }}
   </router-link>
</template>


<script>
import IconBase from '@/components/UI/IconBase.vue';
import { teal, lightTeal } from '@/constants/colors';

export default {
   name: 'LinkWithIcon',
   components: {
      IconBase, 
   },
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
      this.tealColor = teal;
      this.lightTealColor = lightTeal;
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
