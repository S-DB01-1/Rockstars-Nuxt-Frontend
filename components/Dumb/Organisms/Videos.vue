<template>
  <div class="container py-5 mb-5">
    <div class="relative text-center text-white mb-4">
      <Title size="2">
        Videos
      </Title>
    </div>
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="video in videos" class="videoBox">
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
}
</script>

<style scoped>

</style>
