<template>
  <div class="hero h-60 before:h-60"  v-bind:style="{ backgroundImage: 'url(' + require('assets/image/banner.webp') + ')' }">
    <header>
      <div class="container py-4">
        <img :src="require('assets/image/logo.webp')"/>
        <div class="flex justify-between">
          <img :src="require('assets/image/logo.webp')"/>

          <div class="mt-3">
            <form action="/search?type=type&input=input" class="flex w-full justify-center">
              <select name="type" class="bg-rockstar-yellow p-1 h-8 text-xs border-none outline-0">
                <option value="Video" selected>Video's</option>
                <option value="Artikelen">Artikelen</option>
                <option value="Podcasts">Podcasts</option>
              </select>
              <div class="w-full relative flex">
                <input name="input" type="text" class="w-full h-8 border-none outline-0 p-1 ">
                <button type="submit" class="h-8 w-10 p-2 text-center bg-rockstar-yellow border-none">
                  <img :src="require('assets/img/icons/search.svg')"/>
                </button>
              </div>
            </form>
          </div>



        </div>
        <img :src="require('assets/image/logo.webp')"/>
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
