<template>
  <div class="content">
    <div class="container ">
      <div class="bg-rockstar-yellow -mt-16 p-4">
        <div class="grid md:grid-cols-1 lg:grid-cols-2">
          <div>
            <Title size="5" class="py-4">
              {{ title }}
            </Title>
            <Title class="mb-4" size="1">
              {{ subtitle }}
            </Title>
            <Title size="6">
              {{ description }}
            </Title>
            <br><br>
          </div>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorDescriptionBox',
  props: {
    title: String,
    subtitle: String,
    description: String
  }
}
</script>
