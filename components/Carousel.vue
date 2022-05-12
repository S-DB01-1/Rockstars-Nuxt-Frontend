<template>
  <div class="hero-image mt-10 relative">
    <div class="container">
      <client-only>
      <div v-if="!isEmpty(articles)">
          <VueSlickCarousel v-bind="settings">
                                                                <!-- <div v-for="article in articles" :key="article">
                                                                  <Card Author=article.Author Title=article.Name Description=article.Description />
                                                                </div> -->
            <div v-for="article in articles" :key="article">
              <Card :Author=article.title :Title=article.title :Description=article.description :TribeId=article.tribeid :ArticleId=article.id />

                                                                                      <!-- <div class="rounded overflow-hidden shadow-lg m-8 bg-white">
                                                                                        <div class="bg-rockstar-yellow author-block -mt-4 ml-4 pl-4 pr-4 pb-2 pt-2">
                                                                                          <p>{{article.title}}</p>
                                                                                          </div>
                                                                                          <div>
                                                                                          <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">
                                                                                          </div>
                                                                                          <div class="px-6 py-4">
                                                                                            <Title size="3" class="font-bold mb-2">
                                                                                              test
                                                                                            </Title>
                                                                                            <p class="text-gray-700 text-xs">
                                                                                              tests
                                                                                            </p>
                                                                                          </div>
                                                                                          <div>
                                                                                            <Button theme="light">
                                                                                              GA NAAR
                                                                                            </Button>
                                                                                          </div>
                                                                                        </div> -->
              </div>  
                                                            <!--            <div v-for="article in articles">-->
                                                            <!--              <div class="rounded overflow-hidden shadow-lg m-8 bg-white">-->
                                                            <!--                <div class="bg-rockstar-yellow author-block -mt-4 ml-4 pl-4 pr-4 pb-2 pt-2">-->
                                                            <!--                  <p>{{ article.Author }}</p>-->
                                                            <!--                </div>-->
                                                            <!--                <div>-->
                                                            <!--                  <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">-->
                                                            <!--                </div>-->
                                                            <!--                <div class="px-6 py-4">-->
                                                            <!--                  <Title size="3" class="font-bold mb-2">-->
                                                            <!--                    {{ article.Name }}-->
                                                            <!--                  </Title>-->
                                                            <!--                  <p class="text-gray-700 text-xs">-->
                                                            <!--                    {{ article.Description }}-->
                                                            <!--                  </p>-->
                                                            <!--                </div>-->
                                                            <!--                <div>-->
                                                            <!--                  <Button theme="light">-->
                                                            <!--                    GA NAAR-->
                                                            <!--                  </Button>-->
                                                            <!--                </div>-->
                                                            <!--              </div>-->
                                                            <!--            </div>-->
          </VueSlickCarousel>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Card from '../components/Dumb/Molecules/Card.vue';

export default {
  name: 'Carousel',
  components: {
    VueSlickCarousel,
    Card
  },
  props: {
    articles: [],
  },
  methods: {
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
    },
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
    };
  }
};
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
