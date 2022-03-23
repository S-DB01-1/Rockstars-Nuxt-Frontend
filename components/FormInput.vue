<template>
  <div class="form-input">
    <input :class="{
      'bg-gray-100 m-2 border-b-2 border-gray-400 text-gray-700 hover:text-black': true,
      'border-red-400': status === 'error'
    }">
    <span class="symbol text-red-400">
      &times;
    </span>
    <span class="symbol">
      &#10003;
    </span>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  props: {
    status: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss">
.form-input {
  display: inline-block;

  input {
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
