<template>
  <footer class="bg-rockstar-yellow p-4">
    <div class="my-4">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8  md:grid-cols-2  sm:grid-cols-1">
          <div>
            <Title size="4">
              TRIBES
            </Title>
            <div>
              <ul>
                <li><a>Java Tribe</a></li>
                <li><a>.Net Tribe</a></li>
                <li><a>Mobile Tribe</a></li>
                <li><a>All Tribes</a></li>
              </ul>
            </div>
          </div>

          <div>
            <Title size="4">
              LAATSTE ARTIKELEN
            </Title>
            <div>
              <ul>
                <li><a>Artikel naam</a></li>
                <li><a>Artikel naam</a></li>
                <li><a>Artikel naam</a></li>
              </ul>
            </div>
          </div>

          <div>
            <Title size="4">
              MEER INFORMATIE
            </Title>
            <div>
              <ul>
                <li><a href="https://www.teamrockstars.nl/contact/" target="_blank">Contact</a></li>
                <li><a href="https://shop.teamupit.nl/the-duck.html" target="_blank">Merchandise</a></li>
                <li><a href="https://www.teamrockstars.nl/privacy-policy/" target="_blank">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center">&copy; {{ new Date().getFullYear() }} Rockstars IT</p>
    </div>
  </footer>
</template>

<script>
import Title from "@/components/Dumb/Atoms/Title";

export default {
  name: "Footer",
  components: {
    Title,
  }
}
</script>
