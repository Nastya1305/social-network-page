<template>
   <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 18" :style="styleObject">
      <slot />
   </svg>
</template>

<script>
import { teal } from '@/constants/colors';

export default {
   props: {
      width: {
         type: [Number, String],
         default: "1.2rem"
      },
      height: {
         type: [Number, String],
         default: "1.2rem"
      },
      iconColor: {
         type: String,
         default: teal
      },
      hoverColor: {
         type: String,
         default: teal
      }
   },
   computed: {
      styleObject() {
         return {
            '--icon-color': this.iconColor,
            '--icon-color--hover': this.hoverColor,
         };
      },
   }
}
</script>

<style scoped>
svg {
   fill: var(--icon-color);
}

svg:hover {
   fill: var(--icon-color--hover);
}
</style>