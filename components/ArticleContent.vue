<template>
    <div class="container mx-auto px-16 black-con">
      <div class="grid grid-cols-2 gap-8 flex items-center">
        <div>

          <div>
            <Title size="1">
              Title
            </Title>
            <p class="underTitle ml-4">
              Door : Pieter Jan
            </p>

            <p class="ml-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </div>

          <div>
            <Title size="4">
              Koptitel
            </Title>

            <p class="ml-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>

            <p class="ml-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>

          </div>
        </div>

        <div class="m-16 ">
          <img :src="require('~/assets/image/andre-benz-qz7KZgeDmjU-unsplash.jpg')"/>
        </div>

      </div>

      <div class="grid grid-cols-2 gap-8 flex items-center">
        <div class="m-16 ">
          <img :src="require('~/assets/image/danny-howe-bn-D2bCvpik-unsplash.jpg')"/>
        </div>

        <div>
          <div>
            <Title size="4">
              Koptitel
            </Title>

            <p class="ml-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>

            <p class="ml-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ArticleContent"
}
</script>

<style scoped>
  .black-con {
    color: #ffffff;
  }

  .underTitle {
    font-size: 24px;
    color: #878787;
  }

  p {
    font-size: 24px;
  }
</style>
