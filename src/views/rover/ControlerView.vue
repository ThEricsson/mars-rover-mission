<script setup lang="ts">
// Imports
import ComandCenter from '@/components/rover/ComandCenter.vue'
import { useRoverStore } from '@/stores/rover'
const roverStore = useRoverStore()
// Props
// Hooks
// Values
// Errors
// Methods
</script>
<template>
  <main class="h-screen">
    <div class="content m-6">
      <h1 class="text-center text-4xl mb-4">Rover control center</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="subContent bg-white-100 shadow-xl">
          <h2 class="text-3xl text-center">Controler</h2>
          <ComandCenter />
        </div>
        <div class="subContent bg-base-100 shadow-xl">
          <h2 class="text-3xl text-center">Status history</h2>
          {{ roverStore.getRoverPosition() }}
        </div>
      </div>
    </div>
  </main>
</template>
