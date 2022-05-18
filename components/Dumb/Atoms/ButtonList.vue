<template>
  <ul
    :class="{
      'w-min-fit w-72 border-b-2 cursor-pointer': true,
       'border-black': theme !== 'light',
       'border-white': theme === 'light'
    }"
    >
    <li
      v-for="(func, text) in items"
      :key="text"
      @click="func()"
      :class="{
        'border-t-2 flex justify-between hover:pl-4 ease-in-out duration-200': true,
        'border-black hover:bg-neutral-400': theme !== 'light',
        'border-white text-white hover:bg-neutral-200': theme === 'light'
      }">
      <button class="py-2">{{ text }}</button>
      <img v-show="theme !== 'light'" :src="require('assets/img/icons/forward-black.svg')" class="w-4 ml-2"/>
      <img v-show="theme === 'light'" :src="require('assets/img/icons/forward-white.svg')" class="w-4 ml-2"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ButtonList",
  props: {
    items: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      default: 'default'
    }
  }
}
</script>
