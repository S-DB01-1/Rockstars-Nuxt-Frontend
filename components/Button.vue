<template>
  <button
    :class="{
      'p-4 px-6 duration-500 ease-in-out  font-semibold': true,
      'hover:p-8': status === 'normal',
      'bg-rockstar-yellow text-black': theme === 'default',
      'bg-black text-white': theme === 'dark',
      'bg-white text-black': theme === 'light'
    }"
  >
    <slot />
    <span v-show="status === 'normal'">
      &gt;&gt;
    </span>
    <span v-show="status === 'loading'">
      o
    </span>
    <span v-show="status === 'active'">
      &#10003;
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    status: {
      type: String,
      default: 'normal'
    },
    theme: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

button {
  font-family: DIN2014-Bold, sans-serif;
}
</style>
