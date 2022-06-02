<template>
  <DescriptionBox title="Rockstar Tribes" :subtitle="subtitle" :description="description">
    <div class="loading" v-if="!isEmpty(rockstars)">
      <transition name="fade">
        <div v-if="show" class="profileBox">
          <div v-if="rockstarsArray[index].img">
            <img :src="require( rockstarsArray[index].img )" class="avatar" alt=""/>
          </div>
          <div v-else class="hoverer">
            <div class="quotebox"><h1 class="overlayText">"{{ rockstarsArray[index].quote }}"</h1></div>
            <img :src="require('assets/image/user.webp')" class="avatar" alt=""/>
          </div>
          <div>
            <Title size="1">
              {{ rockstarsArray[index].name }}
            </Title>
            <Title size="3">
              {{ rockstarsArray[index].description }}
            </Title>
          </div>
          <div v-show="rockstarsArray[index].linkedin" class="flex justify-center items-center">
            <a :href="`https://www.linkedin.com/${rockstarsArray[index].linkedin}`">
              <img :src="require('assets/image/icons/linkedin.svg')" alt="Linkedin logo" class="h-10 w-10">
            </a>
          </div>
        </div>
      </transition>
    </div>
  </DescriptionBox>
</template>

<script>
import DescriptionBox from "~/components/Dumb/Organisms/DescriptionBox";
import Title from "~/components/Dumb/Atoms/Title.vue";

export default {
  name: 'TribeDescriptionBox',
  components: {DescriptionBox, Title},
  props: {
    subtitle: String,
    description: String,
    rockstars: [],
    quote: String
  },
  computed: {
    rockstarsArray() {
      const output = [];

      if (this.rockstars) {
        Object.keys(this.rockstars).forEach((key) => {
          if (this.rockstars[key].name && this.rockstars[key].description && this.rockstars[key].linkedin)
          output.push(this.rockstars[key]);
        });
      }


      return output;
    }
  },
  methods: {
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
    },
  },
  data() {
    return {
      show: true,
      index: 0,
    };
  },
  created() {
    setInterval(() => {
      if (this.rockstarsArray) {
        this.show = false;
        this.index++;

        if (this.index >= this.rockstarsArray.length) {
          this.index = 0;
        }
        setTimeout(() => {
          this.show = true;
        }, 4000);
      }
    }, 8000);
  },
};
</script>

<style>
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

.quotebox {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: table;
  padding: 5px;
  overflow: hidden;
}

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  backface-visibility: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* hover */

.hoverer:hover .avatar {
  opacity: 0.2;
}

.hoverer:hover .overlayText {
  opacity: 1;
}

.overlayText {
  display: table-cell;
  vertical-align: middle;
}

</style>
