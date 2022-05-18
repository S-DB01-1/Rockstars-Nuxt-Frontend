<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <main class="flex-grow">
      <Nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Smart/Organisms/Header";
import Footer from "~/components/Smart/Organisms/Footer";

export default {
  components: {Header, Footer}
}
</script>
