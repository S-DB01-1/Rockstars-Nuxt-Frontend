<template>
  <section class="overflow-hidden shadow-lg h-full">
    <img class="object-cover h-80" :src="require('assets/img/Banner.png')" alt="">
    <div class="grid lg:h-fit md:h-20">
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
