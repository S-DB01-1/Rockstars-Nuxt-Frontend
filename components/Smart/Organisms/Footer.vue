<template>
  <footer class="bg-rockstar-yellow p-4">
    <div class="my-4">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8  md:grid-cols-2  sm:grid-cols-1">
          <div>
            <Title size="4">
              TRIBES
            </Title>
            <div v-if="tribeLastThree">
                <ul>
                  <div v-for="tribe of tribeLastThree">
                    <li><a :href="`/tribe/${tribe.id}`" target="_blank">{{ tribe.name }}</a></li>
                  </div>
                  <li> <a href="/" target="_blank">Alle tribes</a></li>
                </ul>
            </div>
          </div>

          <div>
            <Title size="4">
              LAATSTE ARTIKELEN
            </Title>

            <div v-if="articles">
              <ul>
                <div v-for="article of articles.results">
                  <li><a :href="`/tribe/${article.tribeid}/article/${article.id}`" target="_blank">{{ article.title }}</a></li>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <Title size="4">
              MEER INFORMATIE
            </Title>
            <div>
              <ul>
                <li><a href="https://www.teamrockstars.nl/contact/" target="_blank">Contact</a></li>
                <li><a href="https://shop.teamupit.nl/the-duck.html" target="_blank">Merchandise</a></li>
                <li><a href="https://www.teamrockstars.nl/privacy-policy/" target="_blank">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p class="mt-3">&copy; {{ new Date().getFullYear() }} Rockstars IT</p>
      </div>


    </div>
  </footer>
</template>

<script>
import {mapActions} from "vuex";
import Title from "@/components/Dumb/Atoms/Title";

export default {
  name: "Footer",
  components: {
    Title,
  },
  methods: {
    ...mapActions(['tribeGetLastThree'])
  },
  data() {
    return {
      articles: []
    };
  },
  computed: {
    tribeLastThree() {
      return this.$store.getters.tribeGetLastThree();
    },
  },
  async fetch() {
    this.articles = await fetch(
      "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1/articles/?ordering=-datecreated&format=json&limit=3"
    ).then(res => res.json());
  },
  created() {
    this.tribeGetLastThree({limit: 3});
  },
}
</script>
