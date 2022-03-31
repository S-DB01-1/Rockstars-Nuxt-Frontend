<template>
  <div class="bg-white">
    {{ tribe }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      tribe: this.$store.state.tribe
    }
  },
  methods: {
    ...mapActions(['tribeRead'])
  },
  created () {
    this.$store.dispatch('tribeRead')
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

</style>
