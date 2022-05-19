<template>
  <div class="content mb-10">
    <div class="container ">
      <div class="bg-rockstar-yellow -mt-16 p-4">
        <div class="text-center">
          <Title size="1" class="py-4">
            Je inzending is gelukt!
          </Title>
          <p class="py-4">
            Bedankt ! We hebben je inzending ontvangen en we nemen snel contact met je op.
          </p>
          <router-link :to="{ name: 'demand' }">
            <Button theme="dark">
              NOG EEN FORMULIER INDIENEN
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"

export default {
  name: "success",
  components: {
    Button,
    Title,
  }
}
</script>

<style scoped>

</style>
