<template>
  <div id="app">
    <v-navbar></v-navbar>
    <router-view></router-view>
    <v-footer></v-footer>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    'v-navbar': Navbar,
    'v-footer': Footer
  }
}
</script>

<style>

</style>
