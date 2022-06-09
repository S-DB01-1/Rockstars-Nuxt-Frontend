<template>
  <div>
    <div v-if="tribeArticles" class="hero-image mt-10 relative">
      <Carousel :articles="tribeArticles" />
    </div>
    <Videos :videos="tribeVideos" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Carousel from "~/components/Dumb/Organisms/Carousel.vue";
import Videos from "~/components/Dumb/Organisms/Videos";
import Title from "~/components/Dumb/Atoms/Title";

export default {
  name: "search",
  components: { Carousel, Videos },
  methods: {
    ...mapActions(['articleSearch', 'videoSearch', 'tribeGet', 'articleGet'])
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    query() {
      return this.$route.params.query
    },
    tribe_id() {
      return this.$route.params.tribe_id;
    },
    tribe() {
      return this.$store.getters.tribeGet(this.tribe_id);
    },
    tribeArticles() {
      return this.$store.getters.articleSearch(this.tribe_id);
    },
    tribeVideos() {
      return this.$store.getters.videoRead(this.tribe_id);
    }
  },
  created() {
    this.tribeGet({id: this.tribe_id});
    this.articleSearch(
      {
        id: this.tribe_id,
        query: this.query
      },
    );
    this.videoSearch(
      {
        id: this.tribe_id,
        query: this.query
      },
    );
  },
}
</script>

<style scoped>

</style>
