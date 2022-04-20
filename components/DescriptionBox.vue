<template>
  <div class="content">
    <div class="container ">
      <div class="bg-rockstar-yellow -mt-16 p-4">
        <div class="grid md:grid-cols-1 lg:grid-cols-2">
          <div>
            <Title size="5" class="py-4">
              {{ title }}
            </Title>
            <Title size="1" class="mb-4">
              {{ subtitle }}
            </Title>
            <Title size="6">
              {{ description }}
            </Title>
            <br><br>
          </div>

          <div class="loading" v-if="!isEmpty(rockstars)">
            <transition name="fade" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
              <div v-if="show" class="profileBox">
                <div>
                  <img :src="require('assets/img/User.jpg')" class="avatar" />
                </div>
                <div>
                  <Title size="1">
                    {{ rockstars[index].Name }}
                  </Title>
                  <Title size="3">
                    {{ rockstars.length }}
                  </Title>
                </div>
                <div v-if="linkedIn" class="flex justify-center items-center">
                  <a :href="linkedIn">
                    <img :src="require('assets/image/linkedin.svg')" class="h-10 w-10">
                  </a>
                </div>
              </div>
            </transition>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'DescriptionBox',
  props: {
    title: {
      String,
    },
    subtitle: {
      String,
    },
    description: {
      String,
    },
    rockstars: [],
    linkedIn: {
      String,
    },
  },
  methods: {
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
    },
    beforeEnter: function (el) {

    },
    enter: function (el) {

    },
    leave: function (el) {
      el.style.opacity = 0
        if (this.index <= this.rockstarsLength)
        {
          if (this.index === 0) {
            for (var i in this.rockstars) {
              this.rockstarsLength = i
            }
            this.index++
            this.rockstarsLength--
          }
          else{
            this.index++
            console.log("index:" + this.index)
            console.log("rockstarsLength:" + this.rockstarsLength)
          }
        }
        else
        {
          console.log("index > length")
          this.index = 0
        }
    },
  },
  data() {
    return {
      show: true,
      index: 0,
      rockstarsLength: 0
    }
  },
  created () {
    setInterval(() => {
      this.show = !this.show
    }, 2000)
  },
}
</script>

<style lang="scss">

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1024px) {
  .profileBox {
    margin: auto;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .profileBox {
    margin: auto;
    text-align: center;
  }
}

</style>
