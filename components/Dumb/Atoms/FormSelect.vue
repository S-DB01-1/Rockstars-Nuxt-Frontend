<template>
  <div class="form-element">
    <select :value="value" @change="$emit('change', $event.target.value)" :class="{
      'bg-gray-100 m-2 border-b-2 border-gray-400 text-gray-700 hover:text-black': true,
      'border-red-400': status === 'error'
    }">
      <option v-for="(choice, index) in choices" :key="index">
        {{ choice }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  props: {
    value: String | Number | Date,
    choices: Array,
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
