<template>
  <section >
    <div class="h-screen w-screen bg-cover bg-center bg-no-repeat bg-scroll absolute items-center"
         v-bind:style="{ backgroundImage: 'url(' + require('assets/image/rockstar-banner.webp') + ')' }">
      <div class="table h-full w-full container">
        <div class="h-2/5 table-row">
          <div class="table-cell align-middle">
            <Title class="text-center" theme="light">Rockstars IT</Title>
          </div>

        </div>

        <div class="table-row">
          <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 h-full p-4" id='infinite-list'>
            <div v-for="tribe in tribeReadAll">
              <TribeCard :tribeName="tribe.name" />
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import {mapActions} from "vuex";
import Title from "~/components/Dumb/Atoms/Title";
import TribeCard from "~/components/Dumb/Molecules/TribeCard";

export default {
  name: 'IndexPage',
  layout: 'home',
  components: {Title, TribeCard},
  methods: {
    ...mapActions(['tribeRead']),
  },
  computed: {
    tribeReadAll() {
      return this.$store.getters.tribeRead();
    },
  },
  created() {
    this.tribeRead();
  },
}
</script>

<style lang="scss">
@import "assets/css/variables";

#infinite-list {
  /* We need to limit the height and show a scrollbar */
  overflow: auto;
}

/* hide scrollbar but allow scrolling */
#infinite-list{
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

#infinite-list::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

</style>
