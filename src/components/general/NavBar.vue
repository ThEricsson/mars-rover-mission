<script setup lang="ts">
// Imports
import { ref } from 'vue'
import router from '@/router'
import Menubar from 'primevue/menubar'
// Hooks
// Values
const routerRoutes = router.getRoutes()

const currentFullPath = router.currentRoute.value.fullPath

const menuItems = ref(
  routerRoutes.map((route) => {
    return {
      label: String(route.name),
      command: () => {
        router.push(route.path)
      },
    }
  }),
)

// Errors
// Methods
</script>
<template>
  <!-- No tengo decidido si añadir navbar -->
  <!-- <div v-if="currentFullPath != '/'" class="content">
    <Menubar :model="menuItems" />
  </div> -->
</template>
