<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Smart/Organisms/Header";
import Footer from "~/components/Smart/Organisms/Footer";

export default {
  components: {Header, Footer}
}
</script>
