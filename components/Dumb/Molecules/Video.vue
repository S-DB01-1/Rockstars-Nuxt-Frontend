<template>
  <div class="relative">
    <div class="" id="bottom">
      <div class="bg-rockstar-yellow">
        <iframe class="video" width="100%" height="315"  id="myIFrame"
                :src="'https://www.youtube.com/embed/' + link">
        </iframe>
        <div class="p-5 titleBox">
          <div class="flex justify-between">
            <Title size="5">
              {{ title }}
            </Title>
            <div>
              <div class="flex justify-between mt-1">
                <img :src="require('assets/image/icons/eye-solid.svg')" class="mr-2" width="18" alt="Viewcount">
                <Title size="6">
                  {{ viewcount }}
                </Title>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


    <div class="absolute pointer-events-none top-0 left-0 w-full" id="top">
      <div class="descriptionBox p-5 text-base">
        {{ description }}
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
  props: {
    link: String,
    title: String,
    viewcount: Number,
    description: String
  },
}


</script>

<style scoped>
.descriptionBox {
  height: 315px;
  width: 100%;
  background-color: #FFE000;
  opacity: 0.8;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#bottom {
  z-index: 10;
}

#top{
  z-index: 20;
  display: block;
  pointer-events: none;
  display: none
}

#bottom:hover~#top {
  display: block;
  animation: fadeIn 1s;
}
</style>
