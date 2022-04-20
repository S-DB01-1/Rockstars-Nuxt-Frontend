<template>
  <div class="content">

    <div class="container">
      <div class="bg-rockstar-yellow my-8 p-4">
        <div class="grid md:grid-cols-1 lg:grid-cols-2">
          <div>
            <Title size="5" class="py-4">
              Auteur
            </Title>
            <Title class="mb-4" size="1">
              PIETER JAN
            </Title>
            <Title size="6">
              Hier komt de omschrijving van de autheur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa
              massa ultricies mi. Purus viverra accumsan in nisl nisi scelerisque. Nam libero justo laoreet sit amet
              cursus sit amet dictum. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Massa placerat
              duis ultricies lacus sed turpis tincidunt.
            </Title>
            <br><br>
          </div>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorDescription'
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
