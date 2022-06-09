<template>
  <div>
    <div v-if="tribe">
      <div v-if="tribeRockstars">
        <TribeDescriptionBox  :subtitle="`${tribe.name} Tribe`"
                        :description="tribe.description" :rockstars="tribeRockstars" />
      </div>
    </div>
    <div v-if="tribeArticles" class="hero-image mt-10 relative parallax">
      <!--<img class="hero-banner" :src="require('assets/img/Buildings.jpg')" alt=""> !-->
      <div class="relative text-center text-white">
        <Title size="2">
          Artikelen
        </Title>
        <Title size="4">
          WAAR ZIJN WIJ ZOAL MEE BEZIG ?
        </Title>
      </div>
      <Carousel :articles="tribeArticles" />
    </div>
    <Videos :videos="tribeVideos" />
    <Demand />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Carousel from "~/components/Dumb/Organisms/Carousel.vue";
import TribeDescriptionBox from "~/components/Dumb/Organisms/TribeDescriptionBox";
import Videos from "~/components/Dumb/Organisms/Videos";
import Title from "~/components/Dumb/Atoms/Title";
import Demand from "~/components/Dumb/Organisms/Demand"

export default {
  name: "TribeId",
  components: {TribeDescriptionBox, Carousel, Videos, Title, Demand },
  methods: {
    ...mapActions(['articleRead', 'videoRead', 'rockstarRead', 'tribeGet', 'articleGet'])
  },
  computed: {
    tribe_id() {
      return this.$route.params.tribe_id;
    },
    tribe() {
      return this.$store.getters.tribeGet(this.tribe_id);
    },
    tribeArticles() {
      return this.$store.getters.articleRead(this.tribe_id);
    },
    tribeRockstars() {
      return this.$store.getters.rockstarRead(this.tribe_id);
    },
    tribeVideos() {
      return this.$store.getters.videoRead(this.tribe_id);
    },
  },
  created() {
    this.tribeGet({id: this.tribe_id});
    this.articleRead({id: this.tribe_id});
    this.rockstarRead({id: this.tribe_id});
    this.videoRead({ id: this.tribe_id });
  },
};
</script>

<style >


.hero-image {
  width: 100%;
}

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

.parallax {
  /* The image used */
  background-image: url("../../../assets/image/Buildings(1).jpg");

  /* Set a specific height */
  min-height: 500px;
  z-index: -1;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
