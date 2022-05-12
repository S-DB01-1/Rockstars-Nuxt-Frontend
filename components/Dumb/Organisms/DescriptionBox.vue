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
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"

export default {
  name: 'AuthorDescriptionBox',
  components: {
    Button,
    Title,
  },
  props: {
    title: String,
    subtitle: String,
    description: String
  }
}
</script>
