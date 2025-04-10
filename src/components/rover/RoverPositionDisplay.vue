<script setup lang="ts">
// Imports
import { useRoverStore } from '@/stores/rover'
// Props
// Hooks
const roverStore = useRoverStore()
// Values
// Errors
// Methods
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="content text-center">
      <p class="text-2xl">X → {{ roverStore.getRoverPosition().value.x }}</p>
    </div>
    <div class="content text-center">
      <p class="text-2xl">Y → {{ roverStore.getRoverPosition().value.y }}</p>
    </div>
  </div>
</template>
