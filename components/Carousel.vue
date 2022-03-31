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
                "focusOnSelect": true,
                "infinite": false,
                "speed": 560,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5,
                
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

// .slick-next:before {
//     content: url("../../assets/img/chevron-right-solid.svg");
// }

// .slick-prev:before {
//     content: '←';
// }

.slick-prev:before, .slick-next:before {
    color: #FFE000;
}
</style>

