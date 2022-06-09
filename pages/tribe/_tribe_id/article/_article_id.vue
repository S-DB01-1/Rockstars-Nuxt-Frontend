<template>
  <div class="mb-16" v-if="tribe && tribeArticles">
    <div v-if="tribeRockstars">
      <AuthorDescriptionBox :subtitle="tribeRockstars.name" :tribeName="tribe.name"
        :description="tribeArticles.description" :rockstars="tribeRockstars" />
    </div>
    <div class="mt-16 text-white container">
      <Title size="1" v-for="(articleTitle, index) in article" :key="index">
        {{ articleTitle.title }}
      </Title>
      <div class="text mt-6" v-for="(articleText, index) in articleTextBlocks" :key="index">
        <p v-html="articleText.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AuthorDescriptionBox from "@/components/Dumb/Organisms/AuthorDescriptionBox";

export default {
  name: "ArticlePage",
  components: {
    AuthorDescriptionBox,
    Title,
  },
  data() {
    return {
      article: this.$store.state.articles,
      articleTextBlocks: this.$store.state.articleText
    }
  },
  methods: {
    ...mapActions(['articleGet', 'rockstarGet', 'tribeGet', 'articleTextGet']),
    isEmpty(object) {
      console.log(object)
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
    },
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
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
      this.rockstarGet({id: this.article[this.$route.params.article_id].rockstarid})
      return this.$store.state.rockstars[this.article[this.$route.params.article_id].rockstarid];
    },
  },
  created() {
    this.tribeGet({ id: this.tribe_id });
    this.articleGet({ id: this.article_id });
    this.articleTextGet({ id: this.article_id });
  }
}
</script>

<style scoped>
</style>
