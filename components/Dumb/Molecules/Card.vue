<template>
  <div>
    <div class="rounded overflow-hidden shadow-lg m-8 bg-white">
      <div class="bg-rockstar-yellow author-block -mt-4 ml-4 pl-4 pr-4 pb-2 pt-2">
        <p>{{ Author }}</p>
      </div>
      <div>
        <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">
      </div>
      <div class="px-6 py-4">
        <Title size="3" class="font-bold mb-2 line-clamp-1">
          {{ Title }}
        </Title>
        <p class="text-gray-700 text-xs line-clamp-2">
          {{ Description }}
        </p>
      </div>
      <div>
        <router-link :to="`/tribe/${TribeId}/article/${ArticleId}`">
          <Button theme="light">
            GA NAAR ARTIKEL
          </Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"

export default {
  name: 'Card',
  components: {Button, Title},
  props: {
    Author: String,
    Title: String,
    Description: String,
    TribeId: String,
    ArticleId: String
  },
}
</script>

<style lang="scss">
@import "../../../assets/css/variables";

.thumbnail {
  height: 200px;
  object-fit: cover;
}

.author-block {
  position: absolute;
}

</style>
