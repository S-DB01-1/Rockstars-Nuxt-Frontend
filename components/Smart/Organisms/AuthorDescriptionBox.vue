<template>
  <DescriptionBox title="Auteur" subtitle="PIETER JAN" description="Lorum Ipsum whatever">
    <div class="profileBox">
      <div>
        <img :src="require('assets/img/User.jpg')" class="avatar"/>
      </div>

      <div>
        <Title class="font-bold mt-2" size="3">
          Tribe naam
        </Title>
      </div>
      <div class="justify-center items-center">
        <Title size="3" class="mr-4 mb-2">
          Software Developer
        </Title>

      </div>
      <div class="flex justify-center items-center">
        <img :src="require('assets/image/linkedin.svg')" class="h-10 w-10"/>
      </div>
    </div>
  </DescriptionBox>
</template>

<script>
import DescriptionBox from "@/components/Dumb/Organisms/DescriptionBox";
export default {
  name: 'AuthorDescriptionBox',
  components: {DescriptionBox}
}
</script>

<style lang="scss">
@import "assets/css/variables";

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
}

.socials {
  width: 7%;
  height: 7%;
}

</style>
