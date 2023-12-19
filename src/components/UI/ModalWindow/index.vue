<template>
   <div v-if="show" class="modal__mask" @click.stop="$emit('close')">
      <div @click.stop class="modal__container">

         <div class="modal__header">
            <h3 v-if="title" class="modal__title">{{ title }}</h3>
            <my-button isIconBtn class="modal__close-button" @click="$emit('close')">
               <close-icon />
            </my-button>
         </div>
         <slot></slot>

      </div>
   </div>
</template>


<script>
import CloseIcon from '@/assets/CloseIcon.vue'

export default {
   name: 'modal-window',
   components: {
      CloseIcon
   },
   props: {
      title: String,
      show: {
         type: Boolean,
         default: false
      }
   },
   watch: {
      show() {
         document.body.classList.toggle("modal-open");
      }
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
