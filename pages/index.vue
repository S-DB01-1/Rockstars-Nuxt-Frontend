<template>
  <div class="bg-white">
    <div v-if="!isEmpty(tribes)">
      {{ tribes[1].Name }}
    </div>
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
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
    }
  },
  created() {
    this.tribeRead()
    this.articleRead({id: 1})
    this.rockstarRead({id: 1})
    this.podcastRead({id: 1})
    this.videoRead({id: 1})
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
