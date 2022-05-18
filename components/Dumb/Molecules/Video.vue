<template>
  <div class="bg-rockstar-yellow w-100 videoBox">
    <div class="descriptionBox p-5">
      {{ description }}
    </div>
    <iframe class="video" width="100%" height="315"
            :src="'https://www.youtube.com/embed/' + link">
    </iframe>
    <div class="p-5">
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

.videoBox:hover > iframe {
  display: none;
  z-index: -1;
}

.videoBox:hover > .descriptionBox {
  z-index: 1 !important;
  display: block;
  -webkit-animation: fadeIn 0.5s;
  animation: fadeIn 0.5s;
}

.descriptionBox {
  z-index: 0;
  display: none;
  height: 315px;
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
