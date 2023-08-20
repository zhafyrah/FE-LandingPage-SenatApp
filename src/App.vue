<template>
  <!--Navbar  -->
  <Navbar></Navbar>

  <Hero></Hero>
  <main id="main">
    <router-view></router-view>
  </main>
  <!-- footer -->
  <footer-component></footer-component>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: { Navbar, Hero, FooterComponent },
};
</script>
<style></style>
