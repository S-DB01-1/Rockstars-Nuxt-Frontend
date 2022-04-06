<template>
  <div class="bg-white">

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  methods: {
    ...mapActions(['tribeRead', 'articleRead', 'rockstarRead']),
  },
  created () {
    this.rockstarRead()
    this.tribeRead()
    this.articleRead()
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

</style>
