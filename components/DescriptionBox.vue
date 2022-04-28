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
            <transition name="fade">
              <div v-if="show" class="profileBox">
                <div>
                  <img :src="require('assets/img/User.jpg')" alt="avatar logo" class="avatar" />
                </div>
                <div>
                  <Title size="1">
                    {{ rockstarsArray[index].Name }}
                  </Title>
                  <div class="truncate w-50">
                    <Title size="3">
                      {{ rockstarsArray[index].Description }}
                    </Title>
                  </div>
                </div>
                <div v-show="rockstarsArray[index].LinkedIn" class="flex justify-center items-center">
                  <a :href="rockstarsArray[index].LinkedIn">
                    <img :src="require('assets/image/linkedin.svg')" alt="Linkedin logo" class="h-10 w-10">
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
    tribe_id: String
  },
  computed: {
    rockstarsArray () {
      const output = [];

      if (this.rockstars) {
        Object.keys(this.rockstars).forEach((key, index ) => {
          output.push(this.rockstars[key])
        });
      }


      return output;
    }
  },
  methods: {
    ...mapActions(['articleRead', 'rockstarRead', 'tribeGet']),
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
    },
  },
  data() {
    return {
      show: true,
      index: 0
    }
  },
  created () {
    this.tribeGet({id: 2});
    this.rockstarRead({id: 2});
    setInterval(() => {
      if (this.rockstarsArray) {
        this.show = false;

        this.index++;

        if (this.index >= this.rockstarsArray.length) {
          this.index = 0;
        }
        setTimeout(() => {this.show = true}, 500)
      }
    }, 2000)
  },
}
</script>

<style lang="scss">

.avatar {
  border-radius: 50%;
  width: 125px;
  height: 125px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
