<template>
  <main>
    <section>
      <iframe allow="encrypted-media"
              allowtransparency="true"
              frameborder="0"
              height="232"
              :src="spotify_url"
              width="100%"></iframe>
    </section>
  </main>
</template>

<script>
export default {
  name: 'spotify',
  props: {
    spotify_url: {
      type: String
    },
  },
};
</script>

<style scoped>

</style>
