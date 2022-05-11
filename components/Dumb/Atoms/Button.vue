<template>
  <button
    :class="{
      'p-4 px-6 duration-500 ease-in-out  font-semibold': true,
      //'hover:p-8': status === 'normal',
      'bg-rockstar-yellow text-black': theme === 'default',
      'bg-black text-white': theme === 'dark',
      'bg-white text-black': theme === 'light'
    }"
  >
    <div class="flex items-center">
      <slot />
      <span v-show="status === 'normal'">
      <img :src="require('assets/img/icons/forward-solid.svg')" class="icon-size ml-2"/>
    </span>
      <span v-show="status === 'loading'">
      <img :src="require('assets/img/icons/loader.svg')" class="icon-size ml-2"/>
    </span>
      <span v-show="status === 'active'">
      <img :src="require('assets/img/icons/check-solid.svg')" class="icon-size ml-2"/>
    </span>
    </div>
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
@import "../../../assets/css/variables";

button {
  font-family: DIN2014-Bold, sans-serif;
}

.icon-size {
  width: 0.75rem;
  height: 0.75rem;
}
</style>
