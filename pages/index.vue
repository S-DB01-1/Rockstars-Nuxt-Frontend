<template>
  <section >
    <div class="h-screen w-screen bg-cover bg-center bg-no-repeat bg-scroll absolute"
         v-bind:style="{ backgroundImage: 'url(' + require('assets/img/rockstar-banner.png') + ')' }">
      <div class="table h-full w-full m-0 container">
        <div class="h-2/5 table-row">
          <div class="table-cell align-middle">
            <Title class="text-center" theme="light">Rockstars IT</Title>
          </div>

        </div>

        <div class="table-row">
          <div class="grid grid-cols-3 gap-8 h-full" id='infinite-list'>
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
