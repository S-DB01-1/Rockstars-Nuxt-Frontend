<template>
  <div class="bg-white">

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  methods: {
    ...mapActions(['tribeRead']),
    ...mapActions(['articleRead']),
    ...mapActions(['rockstarRead'])
  },
  created () {
      this.$store.dispatch('tribeRead'),
      this.$store.dispatch('articleRead'),
      this.$store.dispatch('rockstarRead')
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

body {
  background-color: $rockstar-yellow;
}
</style>
