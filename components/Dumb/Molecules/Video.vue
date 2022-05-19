<template>
  <div class="bg-rockstar-yellow w-100 videoBox">
    <div class="descriptionBox p-5" v-show="descriptionReveal">
      {{ description }}
    </div>
    <iframe class="video" width="100%" height="315" v-show="!descriptionReveal"
            :src="'https://www.youtube.com/embed/' + link">
    </iframe>
    <div class="p-5 titleBox" @mouseenter="showDescription()" @mouseleave="hideDescription()">
      <div class="flex justify-between">
        <Title size="5">
          {{ title }}
        </Title>
        <div>
          <div class="flex justify-between mt-1">
            <img :src="require('assets/image/eye-solid.svg')" class="mr-2" width="18" alt="Viewcount">
            <Title size="6">
              {{ viewcount }}
            </Title>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Atoms/Title";

export default {
  components: {
    Title
  },
  name: "Video",
  data() {
    return {
      descriptionReveal: false
    }
  },
  methods: {
    showDescription() {
      this.descriptionReveal = true
    },
    hideDescription() {
      this.descriptionReveal = false
    }
  },
  props: {
    link: String,
    title: String,
    viewcount: Number,
    description: String
  }
}
</script>

<style scoped>
.videoBox iframe {
  z-index: 1;
  display: block;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}


.descriptionBox {
  z-index: 0;
  height: 315px;
  animation: fadeIn 1s;
  width: 100%;
}

@-webkit-keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
