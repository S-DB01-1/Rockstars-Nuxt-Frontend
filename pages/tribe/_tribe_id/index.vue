<template>
  <div>
    <div v-if="tribe">
      <div v-if="tribeRockstars">
        <DescriptionBox title="Rockstar Tribes" :subtitle="`${tribe.Name} Tribe`"
                        :description="tribe.Description" :rockstars="tribeRockstars"></DescriptionBox>
      </div>
    </div>
    <Carousel :articles="tribeArticles"></Carousel>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Carousel from "~/components/Carousel";

export default {
  name: "TribeId",
  components: {Carousel},
  methods: {
    ...mapActions(['articleRead', 'tribeGet', 'tribeRockstarGet', "tribeArticlesGet"])
  },
  computed: {
    tribe_id() {
      return this.$route.params.tribe_id;
    },
    tribe() {
      return this.$store.getters.tribeGet(this.tribe_id);
    },
    tribeRockstars() {
      return this.$store.getters.tribeRockstarGet;
    },
    tribeArticles() {
      return this.$store.getters.tribeArticlesGet;
    }
  },
  created() {
    this.articleRead();
    this.tribeGet({id: this.tribe_id});
    this.tribeRockstarGet({id: this.tribe_id});
    this.tribeArticlesGet({id: this.tribe_id});
  },
};
</script>

<style scoped>

</style>
