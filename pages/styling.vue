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
      <Title size="1" theme="light">
        Forms
      </Title>
      <FormInput v-model="testvar" type="text" />
      <FormInput v-model="testvar" status="correct" />
      <FormInput v-model="testvar" status="error" />
      <FormSelect v-model="testList" :choices="[1, 2, 3]" />
    </section>
  </main>
</template>

<script>
import Button from "@/components/Dumb/Atoms/Button";
import Title from "@/components/Dumb/Atoms/Title";
import FormInput from "@/components/Dumb/Atoms/FormInput";
import FormSelect from "@/components/Dumb/Atoms/FormSelect";

export default {
  components: {Button, Title, FormInput, FormSelect},
  data() {
    return {
      testvar: null,
      testList: null
    }
  }
}
</script>

<style scoped>

</style>
