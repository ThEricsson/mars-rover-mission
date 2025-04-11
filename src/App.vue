<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/general/NavBar.vue'
import Footer from '@/components/general/Footer.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <Footer />
</template>
