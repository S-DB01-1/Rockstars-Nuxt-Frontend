<template>
  <main>
    <section>
      <iframe style="border-radius:12px"
              :src="spotify_url" width="100%"
              height="152" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </section>
  </main>
</template>

<script>
export default {
  name: "SpotifySmall",
  props: {
    spotify_url: {
      type: String
    },
  },
};
</script>

<style scoped>

</style>
