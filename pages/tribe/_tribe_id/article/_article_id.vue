<template>
  <div>
    <div v-if="tribeRockstars && tribe && tribeArticles">
      <AuthorDescriptionBox  :subtitle="tribeRockstars.name" :tribeName="tribe.name" :description="tribeArticles.description" :rockstars="tribeRockstars" />
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AuthorDescriptionBox from "@/components/Smart/Organisms/AuthorDescriptionBox";

export default {
  name: "ArticlePage",
  components: {
    AuthorDescriptionBox,
  },
  methods: {
    ...mapActions(['articleGet', 'rockstarGet', 'tribeGet'])
  },
  computed: {
    tribe_id() {
      return this.$route.params.tribe_id;
    },
    tribe() {
      return this.$store.getters.tribeGet(this.tribe_id);
    },
    article_id() {
      return this.$route.params.article_id;
    },
    tribeArticles() {
      return this.$store.getters.articleGet(this.article_id);
    },
    tribeRockstars() {
      return this.$store.getters.rockstarGet(this.article_id);
    },
  },
  created() {
    this.tribeGet({id: this.tribe_id});
    this.articleGet({id: this.article_id })
    this.rockstarGet({id: this.article_id});
  }
}
</script>

<style scoped>

</style>
