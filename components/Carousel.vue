<template>
  <section >
    <client-only>
      <VueSlickCarousel v-bind="settings">
        <div v-for="i in 5" :key="i">
          <Card />
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
    return {
      settings: {
        "dots": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 2,
        "initialSlide": 0,
        "touchThreshold": 5,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "infinite": false,
              "dots": false
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "dots": false,
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 1
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "dots": false,
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/variables";
.slick-dots li button:before {
  color: #FFE000 !important;
}
.slick-dots li.slick-active button:before {
  color: #FFE000 !important;
}
.slick-prev:before, .slick-next:before {
  color: #FFE000 !important;
}

@media screen and (max-width: 1024px) {
  .slick-arrow {
    display: none !important;
  }
}
</style>
