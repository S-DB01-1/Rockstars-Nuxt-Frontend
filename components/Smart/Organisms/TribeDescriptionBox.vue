<template>
  <DescriptionBox v-if="tribe" title="Rockstar Tribes" :subtitle="tribe.name" :description="tribe.description">
    <div class="loading" v-if="!isEmpty(rockstars)">
      <transition name="fade">
        <div v-if="show" class="profileBox">
          <div>
            <img :src="require('assets/img/User.jpg')" class="avatar"/>
          </div>
          <div>
            <Title size="1">
              {{ rockstarsArray[index].Name }}
            </Title>
            <Title size="3">
              {{ rockstarsArray[index].Description }}
            </Title>
          </div>
          <div v-show="rockstarsArray[index].LinkedIn" class="flex justify-center items-center">
            <a :href="rockstarsArray[index].LinkedIn">
              <img :src="require('assets/image/linkedin.svg')" alt="Linkedin logo" class="h-10 w-10">
            </a>
          </div>
        </div>
      </transition>
    </div>
  </DescriptionBox>
</template>

<script>
import {mapActions} from "vuex";
import DescriptionBox from "~/components/Dumb/Organisms/DescriptionBox";

export default {
  name: 'TribeDescriptionBox',
  components: {DescriptionBox},
  props: {
    tribe_id: String
  },
  computed: {
    tribe() {
      return this.$store.getters.tribeGet(this.tribe_id)
    },
    rockstars() {
      return this.$store.getters.rockstarRead(this.tribe_id);
    },
    rockstarsArray() {
      const output = [];

      if (this.rockstars) {
        Object.keys(this.rockstars).forEach((key, index) => {
          output.push(this.rockstars[key]);
        });
      }


      return output;
    }
  },
  methods: {
    ...mapActions(['articleRead', 'rockstarRead', 'tribeGet']),
    isEmpty(object) {
      return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
    },
  },
  data() {
    return {
      show: true,
      index: 0
    };
  },
  created() {
    this.tribeGet({id: 2});
    this.rockstarRead({id: 2});
    setInterval(() => {
      if (this.rockstarsArray) {
        this.show = false;

        this.index++;

        if (this.index >= this.rockstarsArray.length) {
          this.index = 0;
        }
        setTimeout(() => {
          this.show = true;
        }, 500);
      }
    }, 2000);
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

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
