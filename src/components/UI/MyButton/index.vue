<template>
   <button :class="[isIconBtn ? 'icon-btn' : 'text-btn', 'button']">

      <icon-base v-if="isIconBtn" :hoverColor="lightTealColor" :width="width" :height="height">
         <slot></slot>
      </icon-base>

      <slot v-else></slot>
      
   </button>
</template>


<script>
import { lightTeal } from '@/constants/colors';

export default {
   name: 'my-button',
   props: {
      isIconBtn: {
         type: Boolean,
         default: false
      },
      width: [Number, String],
      height: [Number, String]
   },
   created() {
      this.lightTealColor = lightTeal;
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
