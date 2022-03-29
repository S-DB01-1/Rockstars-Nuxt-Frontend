<template>
  <div class="content">
        <div class="container mx-auto  px-16">
          <div class="bg-rockstar-yellow -mt-16 p-4">
          <div class="grid grid-cols-2 gap-4">
              <div>
                <Title size="5" >
                  Rockstar Tribes
                </Title> 
                <Title size="1">
                  JAVA TRIBE
                </Title>
                <Title size="6">
                  Java, een van de populairste programmeertalen van het moment, is veel meer dan alleen dat. Het is een ecosysteem, een denkwijze, een opleidingsplan en bovenal: een hele actieve community. Java op zichzelf is niets; het zijn de ontwikkelaars die de taal hebben gemaakt tot wat het is. Precies dat wordt in de Java Tribe binnen Team Rockstars IT benadrukt.
                </Title>
                <br><br>
              </div>

              <div>
                <div>
                  <img :src="require('assets/img/User.jpg')"/>
                </div>
                <div>
                  <Title size="1">
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
  name: 'TribeDescription'
}
</script>

<style lang="scss">
@import "assets/css/variables";



</style>
