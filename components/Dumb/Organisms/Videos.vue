<template>
  <div class="container py-5 my-28">
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="video in videos" class="">
        <Video :link="video.link" :title="video.title" :viewcount="video.viewcount" :description="video.description"/>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "../Molecules/Video";

export default {
  name: "Videos",
  components: {
    Video
  },
  props: {
    videos: []
  },
};
</script>

<style scoped>

</style>
