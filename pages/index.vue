<template>
  <div class="bg-white">
    {{ tribes[1].Name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  methods: {
    ...mapActions(['tribeRead', 'articleRead', 'rockstarRead', 'podcastRead', 'videoRead']),
  },
  mounted () {
    this.tribeRead()
    this.articleRead()
    this.rockstarRead()
    this.podcastRead()
    this.videoRead()
  },
  data () {
    return {
      tribes: this.$store.getters.tribeRead
    }
  },
}
</script>

<style lang="scss">
@import "assets/css/variables";

</style>
