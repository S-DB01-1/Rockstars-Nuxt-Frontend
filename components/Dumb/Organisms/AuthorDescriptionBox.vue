<template>
  <DescriptionBox title="Auteur" :subtitle="subtitle" :description="description">
    <div class="loading" v-if="rockstars && tribeName">
      <div class="profileBox">
        <div v-if="rockstars.img">
          <img :src="require( rockstars.img )" class="avatar"/>
        </div>
        <div v-else>
          <img :src="require('assets/image/user.webp')" class="avatar"/>
        </div>
        <div>
          <Title size="1">
            {{ tribeName }}
          </Title>
          <Title size="3">
            {{ rockstars.quote }}
          </Title>
        </div>

        <div v-show="rockstars.linkedin" class="flex justify-center items-center">
          <a :href="`https://www.linkedin.com/${rockstars.linkedin}`">
            <img :src="require('assets/image/icons/linkedin.svg')" alt="Linkedin logo" class="h-10 w-10">
          </a>
        </div>
      </div>
    </div>
  </DescriptionBox>
</template>

<script>
import DescriptionBox from "@/components/Dumb/Organisms/DescriptionBox";
import Title from "@/components/Dumb/Atoms/Title";
export default {
  name: 'AuthorDescriptionBox',
  components: {
    DescriptionBox,
    Title,
  },
  props: {
    subtitle: String,
    description: String,
    rockstars: [],
    tribeName: String,
  },
};
</script>

<style lang="scss">
@import "assets/css/variables.scss";

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}

.profileBox {
  margin: auto;
  text-align: center;
  vertical-align: middle;
}

</style>
