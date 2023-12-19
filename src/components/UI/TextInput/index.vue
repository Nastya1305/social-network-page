<template>
   <div>
      <label v-if="label" for="input" class="label">{{ label }}</label>

      <input type="text" id="input" class="input" :value="modelValue"
         @input="updateInput" />
   </div>
</template>


<script>

export default {
   name: 'text-input',
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
