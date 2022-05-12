<template>
  <main>
    <section class="bg-rockstar-yellow p-4">
      <Title size="3">
        Rockstar online Branding
      </Title>
      <Title size="1">
        ONLINE STYLEGUIDE
      </Title>
    </section>
    <section class="bg-gray-300 p-4">
      <Title size="1">
        Buttons
      </Title>
      <Title size="2">
        Desktop
      </Title>
      <Button>
        NORMAL STATE
      </Button>
      <Button status="loading">
        LOADING STATE
      </Button>
      <Button status="active">
        ACTIVE STATE
      </Button>
      <br />
      <Button theme="dark">
        NORMAL STATE
      </Button>
      <Button theme="dark" status="loading">
        LOADING STATE
      </Button>
      <Button theme="dark" status="active">
        ACTIVE STATE
      </Button>
      <br />
      <Button theme="light">
        NORMAL STATE
      </Button>
      <Button theme="light" status="loading">
        LOADING STATE
      </Button>
      <Button theme="light" status="active">
        ACTIVE STATE
      </Button>
    </section>
    <section class="p-4">
      <Title size="1">
        FORMS
      </Title>
      <FormInput type="text" />
      <FormInput status="error" />
    </section>
  </main>
</template>

<script>
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"
export default {
  name: "styling",
  components: {
    Button,
    Title,
  },
};
</script>
<style scoped>

</style>
