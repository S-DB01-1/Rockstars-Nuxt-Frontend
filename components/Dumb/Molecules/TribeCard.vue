<template>
  <section class="max-w-sm overflow-hidden shadow-lg">
    <img class="object-cover h-96" :src="require('assets/img/Banner.png')" alt="">
    <div class="grid">
      <Button class="m-0">{{ tribeName }}</Button>
    </div>
  </section>
</template>

<script>
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"

export default {
  name: 'TribeCard',
  components: {Button, Title},
  props: {
    tribeName: String,
  },
}
</script>

<style lang="scss">

</style>
