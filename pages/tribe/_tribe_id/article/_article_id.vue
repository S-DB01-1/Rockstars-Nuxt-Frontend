<template>
  <div>
    {{ tribe_id }} - {{ article_id }}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const tribe_id = params.tribe_id // When calling /abc the slug will be "abc"
    const article_id = params.article_id // When calling /abc the slug will be "abc"
    return { tribe_id, article_id }
  }
}
</script>

<style scoped>

</style>
