<template>
  <div class="bg-white">
    {{ $store.getters.tribeGet(1) }}
    <div class="bg-black">

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'IndexPage',
  methods: {
    ...mapActions(['tribeRead', 'articleRead', 'rockstarRead', 'podcastRead', 'videoRead']),
  },
  created() {
    this.tribeRead()
    this.articleRead()
    this.rockstarRead()
    this.podcastRead()
    this.videoRead()
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

</style>
