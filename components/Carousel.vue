<template>
<section>
    <client-only>
        <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true" class="carousel-wrapper">
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
              "dots": true,
              "infinite": true,
              "centerMode": true,
              "centerPadding": "20px",
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "variableWidth": true
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

.slick-dots li button:before {
    color: #FFE000;
}
.slick-dots li.slick-active button:before {
    color: #FFE000;
}
.slick-prev:before, .slick-next:before {
    color: #FFE000;
}
</style>

