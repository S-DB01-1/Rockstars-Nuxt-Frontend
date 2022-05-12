<template>
  <div class="hero" v-bind:style="{ backgroundImage: 'url(' + require('assets/img/Banner.png') + ')' }">
    <header>
      <div class="container py-4">
        <img :src="require('assets/img/Logo.png')"/>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import "../../../assets/css/variables";

header {
  position: relative;
  z-index: 10;
}

header img {
  width: 100px;
}

.hero {
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 40vh;
  background: rgba(0,0,0,.5);
}

@media only screen and (min-width: 1920px) {
  .hero {
    height: 20vh;
  }
  .hero::before {
    height: 20vh;
  }

}
</style>
