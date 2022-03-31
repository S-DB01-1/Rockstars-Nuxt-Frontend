<template>
<div class="content">

    <div class="container mx-auto lg:px-16 px-8">
        <div class="bg-rockstar-yellow -mt-16 p-4">
            <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <Title size="1">
                        JAVA TRIBE
                    </Title>
                    <Title size="6">
                      Java Developers
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
      <Carousel />
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

</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'TribeDescription',
    methods: {
      ...mapActions(['tribeGet']),
      ...mapActions(['articleRead']),
      ...mapActions(['rockstarRead'])
    },
    created () {
      this.$store.dispatch('tribeGet', {id: this.$route.params.tribe_id}),
        this.$store.dispatch('articleRead'),
      this.$store.dispatch('articleRead'),
        this.$store.dispatch('rockstarRead')
    }
}
</script>

<style lang="scss">
@import "assets/css/variables";

.avatar {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
}

.profileBox {
    margin: auto;
    text-align: center;
}

// .hero-image {

//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// }

// .hero-image::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     height: 40vh;
//     background: rgba(0, 0, 0, .5);
// }

.hero-image {
  width: 100%;

  .hero-banner {
    width: 100%;
    position: absolute;
    height: 50%;
    object-fit: cover;
    filter: brightness(0.5);
  }
}
</style>
