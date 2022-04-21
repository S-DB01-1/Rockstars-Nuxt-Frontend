<template>
  <div class="content">
<!--    <DescriptionBox :tribe_id="tribe_id"></DescriptionBox>-->

    <div class="hero-image mt-10 relative ">
      <img class="hero-banner" :src="require('assets/img/Buildings.jpg')" alt="">
      <div class="container">
        <div class="relative text-center">
          <Title size="2" class="text-white">
            AFLEVERINGEN
          </Title>
          <div class="text-white py-5">
            <p v-if="$fetchState.pending">Aflveringen ophalen...</p>
            <p v-else-if="$fetchState.error">Sorry, er is iets misgegaan :(</p>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div v-for="episode of episodes.results">
                <spotify-small :spotify_url="episode.SpotifyUrl"></spotify-small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      episodes: []
    };
  },
  computed: {
    tribe_id() {
      return this.$route.params.tribe_id;
    },
  },
  methods: {
    ...mapActions(['articleRead', 'rockstarRead', 'tribeGet'])
  },
  async fetch() {
    this.episodes = await fetch(
      "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1/episodes/?podcast=1&format=json"
    ).then(res => res.json());
  },
  created () {

    this.tribeGet({id: this.tribe_id});
    this.articleRead({id: this.tribe_id});
    this.rockstarRead({id: this.tribe_id});
  }
};
</script>
