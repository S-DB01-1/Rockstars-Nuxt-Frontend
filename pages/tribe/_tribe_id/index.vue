<template>
  <div>
    <div v-if="tribe">
      <div v-if="tribeRockstars">
        <DescriptionBox title="Rockstar Tribes" :subtitle="`${tribe.Name} Tribe`"
                        :description="tribe.Description" :rockstars="tribeRockstars" />
      </div>
    </div>
    <div v-if="tribeArticles" >
      <Carousel :articles="tribeArticles" />
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Carousel from "~/components/Carousel";

export default {
  name: "TribeId",
  components: {Carousel},
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
