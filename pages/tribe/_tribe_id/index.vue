<template>
  <div>
    <div v-if="tribe">
      <div v-if="tribeRockstars">
        <TribeDescriptionBox  :subtitle="`${tribe.name} Tribe`"
                        :description="tribe.description" :rockstars="tribeRockstars" />
      </div>
    </div>
    <div v-if="tribeArticles" >
      <img class="hero-banner" :src="require('assets/img/Buildings.jpg')" alt="">
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
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Carousel from "~/components/Carousel";
import TribeDescriptionBox from "@/components/Smart/Organisms/TribeDescriptionBox";

export default {
  name: "TribeId",
  components: {TribeDescriptionBox, Carousel},
  methods: {
    ...mapActions(['articleRead', 'rockstarRead', 'tribeGet'])
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
    }
  },
  created() {
    this.tribeGet({id: this.tribe_id});
    this.articleRead({id: this.tribe_id});
    this.rockstarRead({id: this.tribe_id});
  },
};
</script>

<style scoped>

</style>
