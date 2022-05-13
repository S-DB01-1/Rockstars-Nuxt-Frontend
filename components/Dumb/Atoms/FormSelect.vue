<template>
  <div class="form-element">
<<<<<<<< HEAD:components/Dumb/Atoms/FormSelect.vue
    <select :value="value" @change="$emit('change', $event.target.value)" :class="{
      'bg-gray-100 m-2 border-b-2 border-gray-400 text-gray-700 hover:text-black': true,
      'border-red-400': status === 'error'
    }">
      <option v-for="(choice, index) in choices" :key="index">
        {{ choice }}
      </option>
    </select>
========
    <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :class="{
      'bg-gray-100 m-2 border-b-2 border-gray-400 text-gray-700 hover:text-black': true,
      'border-red-400': status === 'error'
    }">
    <span v-if="status === 'correct'" class="symbol">
      <img :src="require('assets/img/icons/check-black.svg')" class="w-4 ml-2 absolute -left-12 top-7"/>
    </span>
    <span v-else-if="status === 'error'" class="symbol">
      <img :src="require('assets/img/icons/cross-red.svg')" class="w-4 ml-2 absolute -left-12 top-6"/>
    </span>
>>>>>>>> 82a40eb (Finished Button styling):components/Dumb/Atoms/FormInput.vue
  </div>
</template>

<script>
export default {
  name: 'Forms',
  props: {
    value: String | Number | Date,
<<<<<<<< HEAD:components/Dumb/Atoms/FormSelect.vue
    choices: Array,
========
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
>>>>>>>> 82a40eb (Finished Button styling):components/Dumb/Atoms/FormInput.vue
    status: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss">
.form-element {
  display: inline-block;

  select {
    width: 400px;
    cursor: pointer;
    padding: 1rem;

    &:hover {
      padding-bottom: calc(1rem - 2px);
      border-bottom-width: 4px;
    }
  }

  .symbol {
    position: absolute;
    padding: 1rem;
    font-size: 1.8em;
  }
}
</style>
