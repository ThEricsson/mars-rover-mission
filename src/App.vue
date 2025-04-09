<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/general/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
