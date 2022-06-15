<template>
  <button
    :class="{
      'p-4 px-6 m-2 duration-200 ease-in-out  font-semibold': true,
      'bg-rockstar-yellow text-black hover:bg-yellow-200': theme === 'default',
      'bg-black text-white hover:bg-neutral-600': theme === 'dark',
      'bg-white text-black hover:bg-neutral-200': theme === 'light'
    }"
  >
    <div class="flex items-center justify-center">
      <slot />
      <span v-show="status === 'default'">
        <img v-show="theme !== 'dark'" :src="require('assets/image/icons/forward-black.svg')" class="w-4 ml-2"/>
        <img v-show="theme === 'dark'" :src="require('assets/image/icons/forward-white.svg')" class="w-4 ml-2"/>
      </span>
      <span v-show="status === 'loading'">
        <img v-show="theme !== 'dark'" :src="require('assets/image/icons/loader-black.svg')" class="w-4 ml-2 animate-spin"/>
        <img v-show="theme === 'dark'" :src="require('assets/image/icons/loader-white.svg')" class="w-4 ml-2 animate-spin"/>
      </span>
      <span v-show="status === 'active'">
        <img v-show="theme !== 'dark'" :src="require('assets/image/icons/check-black.svg')" class="w-4 ml-2"/>
        <img v-show="theme === 'dark'" :src="require('assets/image/icons/check-white.svg')" class="w-4 ml-2"/>
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
      default: 'default'
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
