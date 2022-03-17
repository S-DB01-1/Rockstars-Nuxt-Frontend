<template>
  <div class="title">
    <h1 v-show="size === '1'" class="mx-4">
      <slot />
    </h1>
    <h2 v-show="size === '2'" class="mx-4">
      <slot />
    </h2>
    <h3 v-show="size === '3'" class="mx-4 my-2">
      <slot />
    </h3>
    <h4 v-show="size === '4'" class="m-4">
      <slot />
    </h4>
    <h5 v-show="size === '5'" class="m-4">
      <slot />
    </h5>
    <h6 v-show="size === '6'" class="m-4">
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
@import "assets/css/variables";

.title {
  h1 {
    font-family: DIN2014-Bold;
    font-size: 70px;
  }

  h2 {
    font-family: DIN2014-Regular;
    font-size: 45px;
  }

  h3 {
    font-family: DIN2014-Regular;
    font-size: 32px;
    color: #444444;
  }

  h4 {
    font-family: DIN2014-Regular;
    font-size: 24px;
  }

  h5 {
    font-family: DIN2014-Regular;
    font-size: 20px;
  }
}
</style>
