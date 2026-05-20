<script setup>
import Hero from '../components/Hero.vue'
import QuickLinks from '../components/QuickLinks.vue'
import KeyDates from '../components/KeyDates.vue'
// import News from '../components/News.vue'
// import Sponsors from '../components/Sponsors.vue'
</script>

<template>
  <div class="home">
    <Hero />
    <QuickLinks />
    <KeyDates />
    <!-- <News /> -->
    <!-- <Sponsors /> -->
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #f7f8fb;
  position: relative;
}
</style>
