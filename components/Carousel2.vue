<template>
  <section>
    <client-only>
      <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true" class="carousel-wrapper">
        <div>
          <div>
            <div @click="$router.push('/tribe/2/article/2')" class="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-white">
              <div>
                <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">"Tweede Artikel"</div>
                <p class="text-gray-700 text-base">
                  Waarom Python coool is
                </p>
              </div>
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
  name: 'Carousel',
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
</style>

