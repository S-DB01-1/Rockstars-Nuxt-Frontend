<template>
  <div class="hero h-60 before:h-60"
       v-bind:style="{ backgroundImage: 'url(' + require('assets/image/banner.webp') + ')' }">
    <header>
      <div class="container py-4">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
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
};
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
  background: rgba(0, 0, 0, .5);
}

</style>
