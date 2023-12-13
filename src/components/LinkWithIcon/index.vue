<template>
   <router-link :to="path" class="link">
      <icon-base width="2rem" height="2rem" :iconColor="transparentTealColor" :hoverColor="tealColor">
         <slot></slot>
      </icon-base>
      {{ text }}
   </router-link>
</template>


<script>
import IconBase from '@/components/UI/IconBase.vue';
import { teal, transparentTeal } from '@/constants/colors';

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
      this.transparentTealColor = transparentTeal;
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
