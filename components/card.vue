<template>
<div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-white">
        <div class="bg-rockstar-yellow author-block -mt-4 ml-4 pl-4 pr-4 pb-2 pt-2">
           <p>Author</p>
        </div>
        <div>
            <img class="w-full thumbnail" :src="require('assets/img/Banner.png')">
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Java</div>
            <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div>
            <Button theme="light">
                NORMAL STATE
            </Button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style lang="scss">
@import "assets/css/variables";

.thumbnail {
    height: 200px;
    object-fit: cover;
}

.author-block {
    position: absolute;
}

</style>
