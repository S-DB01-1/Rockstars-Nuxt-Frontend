<template>
  <section class="overflow-hidden shadow-lg h-full">
    <img class="object-cover h-56" :src="require('assets/image/banner.webp')" alt="">
    <div class="grid lg:h-fit md:h-20">
      <Button class="m-0"><a :href="'/tribe/' + tribeId">{{ tribeName }}</a></Button>
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
    tribeId: String,
  },
}
</script>

<style lang="scss">

</style>
