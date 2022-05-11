<template>
  <div class="title">
    <h1 v-show="size === '1'" class="text-xl">
      <slot />
    </h1>
    <h2 v-show="size === '2'" class="text-lg">
      <slot />
    </h2>
    <h3 v-show="size === '3'" class="text-base">
      <slot />
    </h3>
    <h4 v-show="size === '4'" class="text-tiny">
      <slot />
    </h4>
    <h5 v-show="size === '5'" class="text-sm">
      <slot />
    </h5>
    <h6 v-show="size === '6'" class="text-xs">
      <slot />
    </h6>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/css/variables";

.title {
  h1 {
    font-family: DIN2014-Bold;
  }

  h2 {
    font-family: DIN2014-Regular;
  }

  h3 {
    font-family: DIN2014-Regular;
    color: #444444;
  }

  h4 {
    font-family: DIN2014-Regular;
  }

  h5 {
    font-family: DIN2014-Regular;
  }

  h6 {
    font-family: DIN2014-Regular;
  }
}
</style>
