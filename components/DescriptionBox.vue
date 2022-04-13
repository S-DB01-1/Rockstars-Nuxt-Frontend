<template>
  <div class="container ">
    <div class="bg-rockstar-yellow -mt-16 p-4">
      <div class="grid md:grid-cols-1 lg:grid-cols-2">
        <div>
          <Title size="5" class="py-4">
            Rockstar Tribes
          </Title>
          <Title size="1" class="mb-4">
            JAVA TRIBE
          </Title>
          <Title size="6">
            Java, een van de populairste programmeertalen van het moment, is veel meer dan alleen dat. Het is een
            ecosysteem, een denkwijze, een opleidingsplan en bovenal: een hele actieve community. Java op zichzelf is
            niets; het zijn de ontwikkelaars die de taal hebben gemaakt tot wat het is. Precies dat wordt in de Java
            Tribe binnen Team Rockstars IT benadrukt.
          </Title>
          <br><br>
        </div>

        <div class="profileBox">
          <div class="grid md:grid-cols-2 lg:grid-cols-1 gap-4 flex items-center">
            <div>
              <img :src="require('assets/img/User.jpg')" class="avatar"/>
            </div>

            <div>
              <Title size="3" class="font-bold">
                Naam
              </Title>
              <Title size="3">
                Software Developer
              </Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionBox"
}
</script>

<style lang="scss">

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1024px) {
  .profileBox {
    margin: auto;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .profileBox {
    margin: auto;
    text-align: center;
  }
}

</style>
