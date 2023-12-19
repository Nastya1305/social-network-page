<template>
   <div>
      <label v-if="label" for="text-area" class="label">{{ label }}</label>
      <textarea class="text-box" id="text-area" :value="modelValue"
         @input="updateInput"></textarea>
   </div>
</template>


<script>

export default {
   name: 'text-box',
   props: {
      label: String,
      modelValue: [String, Number]
   },
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
