<!--<template>-->
<!--<section>-->
<!--  <div class="content">-->

<!--    <div class="container mx-auto lg:px-16 px-8">-->
<!--        <div class="bg-rockstar-yellow -mt-16 p-4">-->
<!--            <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">-->
<!--                <div>-->
<!--                  <Title size="5">-->
<!--                      Rockstar Tribes-->
<!--                  </Title>-->
<!--                  <Title size="1">-->
<!--                      JAVA TRIBE-->
<!--                  </Title>-->
<!--                  <Title size="6">-->
<!--                      Java, een van de populairste programmeertalen van het moment, is veel meer dan alleen dat. Het is een ecosysteem, een denkwijze, een opleidingsplan en bovenal: een hele actieve community. Java op zichzelf is niets; het zijn de ontwikkelaars die de taal hebben gemaakt tot wat het is. Precies dat wordt in de Java Tribe binnen Team Rockstars IT benadrukt.-->
<!--                  </Title>-->
<!--                  <br><br>-->
<!--                </div>-->
<!--                <div class="loading" v-if="!isEmpty(rockstars)">-->
<!--                  <transition name="fade" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">-->
<!--                    <div v-if="show" class="profileBox">-->
<!--                        <div>-->
<!--                            <img :src="require('assets/img/User.jpg')" class="avatar" />-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <Title size="1">-->
<!--                              {{ rockstars[index].Name }}-->
<!--                            </Title>-->
<!--                            <Title size="3">-->
<!--                              {{rockstars.length}}-->
<!--                            </Title>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                  </transition>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<!--    &lt;!&ndash;<div class="hero-image mt-16" v-bind:style="{ backgroundImage: 'url(' + require('assets/img/Buildings.jpg') + ')' }">-->
<!--        <Carousel />-->
<!--    </div>&ndash;&gt;-->
<!--    <div class="container mx-auto">-->
<!--        <div class="hero-image mt-10">-->
<!--            <img class="hero-banner" :src="require('assets/img/Buildings.jpg')">-->
<!--            <div class="px-8 lg:px-16" v-if="articles">-->
<!--              <Carousel2 />-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container mx-auto px-8 lg:px-16">-->
<!--        <div class="pt-24">-->
<!--          <Spotify />-->
<!--        </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->
<!--</template>-->

<!--<script>-->
<!--import { mapActions } from 'vuex'-->
<!--import Carousel2 from '../components/Carousel2.vue'-->

<!--export default {-->
<!--  components: { Carousel2 },-->
<!--  name: 'tribe',-->
<!--  methods: {-->
<!--    ...mapActions(['articleRead']),-->
<!--    ...mapActions(['tribeRockstarGet']),-->
<!--    isEmpty(object) {-->
<!--      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype-->
<!--    },-->
<!--    beforeEnter: function (el) {-->

<!--    },-->
<!--    enter: function (el) {-->

<!--    },-->
<!--    leave: function (el) {-->
<!--      el.style.opacity = 0-->
<!--      if (this.index <= this.rockstarsLength)-->
<!--      {-->
<!--        if (this.index === 0) {-->
<!--          for (var i in this.rockstars) {-->
<!--            this.rockstarsLength = i-->
<!--          }-->
<!--          this.index++-->
<!--          this.rockstarsLength&#45;&#45;-->
<!--        }-->
<!--        else{-->
<!--          this.index++-->
<!--          console.log("index:" + this.index)-->
<!--          console.log("rockstarsLength:" + this.rockstarsLength)-->
<!--        }-->
<!--      }-->
<!--      else-->
<!--      {-->
<!--        console.log("index > length")-->
<!--        this.index = 0-->
<!--      }-->
<!--      },-->
<!--  },-->
<!--  async mounted() {-->
<!--    await this.articleRead()-->
<!--    await this.tribeRockstarGet()-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      articles: this.$store.state.articles,-->
<!--      show: true,-->
<!--      namen: ["kerel1", "test2", "test3"],-->
<!--      rockstars: this.$store.state.rockstars,-->
<!--      index: 0,-->
<!--      rockstarsLength: 0-->
<!--    }-->
<!--  },-->
<!--  created () {-->
<!--    setInterval(() => {-->
<!--      this.show = !this.show-->
<!--    }, 2000)-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--.avatar {-->
<!--  border-radius: 50%;-->
<!--  width: 200px;-->
<!--  height: 200px;-->
<!--  object-fit: cover;-->
<!--  margin-left: auto;-->
<!--  margin-right: auto;-->
<!--}-->

<!--.hero-image {-->
<!--  width: 100%;-->
<!--}-->

<!--.hero-banner {-->
<!--  width: 100%;-->
<!--  position: absolute;-->
<!--  height: 42%;-->
<!--  object-fit: cover;-->
<!--  filter: brightness(0.5);-->
<!--}-->

<!--/* .profileBox {-->
<!--  margin: auto;-->
<!--  text-align: center;-->
<!--  animation-delay: 20s;-->
<!--  -webkit-animation: fadeinout 10s linear forwards;-->
<!--  animation: fadeinout 10s linear forwards;-->
<!--  animation-iteration-count: infinite;-->
<!--}-->

<!--.profileBox:hover {-->
<!--  animation-play-state: paused;-->
<!--  animation: none;-->
<!--}-->

<!--@-webkit-keyframes fadeinout {-->
<!--  0%,100% { opacity: 1; }-->
<!--  50% { opacity: 0; }-->
<!--}-->

<!--@keyframes fadeinout {-->
<!--  0%,100% { opacity: 1; }-->
<!--  50% { opacity: 0; }-->
<!--} */-->

<!--.fade-enter-active, .fade-leave-active {-->
<!--  transition: opacity 2s;-->
<!--}-->
<!--.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {-->
<!--  opacity: 0;-->
<!--}-->

<!--</style>-->
