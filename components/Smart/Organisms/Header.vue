<template>
  <div class="hero h-60 before:h-60"  v-bind:style="{ backgroundImage: 'url(' + require('assets/img/Banner.png') + ')' }">
    <header>
      <div class="container py-4">
        <div class="flex justify-between">
          <img :src="require('assets/img/Logo.png')"/>

          <div class="mt-3">
            <form action="/search" class="flex w-full justify-center">
              <select class="bg-rockstar-yellow p-1 h-8 text-xs border-none outline-0">
                <option selected disabled hidden>Video's</option>
                <option value="1">Video's</option>
                <option value="2">Artikelen</option>
                <option value="3">Podcasts</option>
              </select>
              <div class="w-full relative flex">
                <input type="text" class="w-full h-8 border-none outline-0 p-1 ">
                <button type="submit" class="h-8 w-10 p-2 text-center bg-rockstar-yellow border-none">
                  <img :src="require('assets/img/icons/search.svg')"/>
                </button>
              </div>
            </form>
          </div>



        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import "../../../assets/css/variables";

header {
  position: relative;
  z-index: 10;
}

header img {
  width: 100px;
}

.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
}

</style>
