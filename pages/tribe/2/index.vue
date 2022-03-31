<template>
  <section>
    <div class="content">

      <div class="container mx-auto lg:px-16 px-8">
        <div class="bg-rockstar-yellow -mt-16 p-4">
          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <Title size="1">
                PYTHON TRIBE
              </Title>
              <Title size="6">
                Python Developers
              </Title>
              <br><br>
            </div>

            <div class="profileBox">
              <div>
                <img :src="require('assets/img/User.jpg')" class="avatar" />
              </div>
              <div>
                <Title size="1">
                  Naam
                </Title>
                <Title size="3">
                  Software Developer
                </Title>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--<div class="hero-image mt-16" v-bind:style="{ backgroundImage: 'url(' + require('assets/img/Buildings.jpg') + ')' }">
          <Carousel />
      </div>-->
      <div class="hero-image mt-10" >
        <img class="hero-banner" :src="require('assets/img/Buildings.jpg')">
        <Carousel2 />
      </div>
      <div class="container mt-96 mb-8">

        <iframe allow="encrypted-media"
                allowtransparency="true"
                frameborder="0"
                height="232"
                src="https://open.spotify.com/embed-podcast/episode/7d9QeMg8T5XY5y85gyp0wb"
                width="100%"></iframe>
      </div>
      <section>

      </section>
    </div>
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
