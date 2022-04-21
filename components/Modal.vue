<template>
  <div :class="{
    'py-4': true,
    'text-red-600': type === 'error',
    'text-green-500': type === 'correct'
  }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {type: {type: String, default: true}}
}
</script>
