<template>
<section>
  <TribeDescription />
</section>
</template>

<script>
export default {
  name: 'tribe',
  created() {
    console.log("test")
    console.log(this.$route.params)
    console.log(this.$route.params.tribe_id)
  }
}
</script>

<style scoped>

</style>
