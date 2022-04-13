<template>
  <div class="content">

    <DescriptionBox />

    <div class="hero-image mt-10 relative ">
      <img class="hero-banner" :src="require('assets/img/Buildings.jpg')">
      <div class="container">
        <div>
          <Carousel/>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="py-8 sm:py-16 lg:py-24">
        <Spotify/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TribeDescription'
}
</script>

<style lang="scss">
@import "assets/css/variables";

.hero-image {
  width: 100%;

  .hero-banner {
    width: 100%;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: brightness(0.5);
  }
}


</style>
