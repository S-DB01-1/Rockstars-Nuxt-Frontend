<template>
  <section>
    <client-only>
      <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true" class="carousel-wrapper">
        <div v-for="i in 5" :key="i">
          <div @click="$router.push('/tribe/2/article/2')" class="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-white">
            <div class="bg-rockstar-yellow author-block -mt-4 ml-4 pl-4 pr-4 pb-2 pt-2">
              <p>Author</p>
            </div>
            <div>
              <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">"Tweede Artikel"</div>
              <p class="text-gray-700 text-base">
                Waarom Python coool is
              </p>
            </div>
            <div>
              <Button theme="light">
                READ ARTICLE
              </Button>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel2',
  components: {
    VueSlickCarousel
  },
  data() {
    console.log("test");
    return {
      settings: {
        "dots": true,
        "focusOnSelect": true,
        "infinite": false,
        "speed": 560,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";

.carousel-wrapper {
  width: calc(100% - 40px);
}

.thumbnail {
  height: 200px;
  object-fit: cover;
}

.author-block {
  position: absolute;
}
</style>

