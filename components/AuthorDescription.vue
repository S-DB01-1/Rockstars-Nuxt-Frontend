<template>
  <div class="content">

    <div class="container mx-auto lg:px-16 px-8">
      <div class="bg-rockstar-yellow -mt-16 p-4">
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Title size="5">
              AUTHOR
            </Title>
            <Title class="underline" size="1">
              PIETER JAN
            </Title>
            <Title size="6">
              Hier komt de omschrijving van de autheur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies mi.  Purus viverra accumsan in nisl nisi scelerisque. Nam libero justo laoreet sit amet cursus sit amet dictum. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Massa placerat duis ultricies lacus sed turpis tincidunt.
            </Title>
            <br><br>
          </div>

          <div class="profileBox">
            <div>
              <img :src="require('assets/img/User.jpg')" class="avatar" />
            </div>
            <div>
              <Title class="underline" size="1">
                Tribe naam
              </Title>
            </div>

            <div class="flex justify-center items-center">
              <Title size="3" class="mr-4">
                Software Developer
              </Title>
              <img :src="require('assets/image/linkedin.svg')" class="socials"/>
            </div>
          </div>
        </div>
      </div>
    </div>  </div>
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
