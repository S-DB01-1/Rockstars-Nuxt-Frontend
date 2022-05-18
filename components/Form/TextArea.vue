<template>
  <div class="form-element w-full">
    <textarea
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :maxlength="max"
      :minlength="min"
      class="bg-gray-100 m-2 border-b-2 border-gray-400 text-gray-700 hover:text-black">
    </textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    value: String,
    placeholder: String,
    max: {
      type: Number,
      default: 256
    },
    min: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.form-element {
  textarea {
    width: calc(100% - 1rem);
    cursor: pointer;
    padding: 1rem;

    &:hover {
      padding-bottom: calc(1rem - 2px);
      border-bottom-width: 4px;
    }
  }
}
</style>
