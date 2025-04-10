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
  <div class="grid grid-cols-3 gap-4">
    <div class="content text-center">
      <p class="text-2xl">
        <span class="font-bold">X </span>
        <span class="font-bold text-red-500">{{ roverStore.getRoverPosition().value.x }}</span>
      </p>
    </div>
    <div class="content text-center">
      <p class="text-2xl">
        <span class="font-bold">Y </span>
        <span class="font-bold text-blue-500">{{ roverStore.getRoverPosition().value.y }}</span>
      </p>
    </div>
    <div class="content text-center">
      <p class="text-2xl">
        <span class="font-bold">CP </span>
        <span class="font-bold text-emerald-500">{{ roverStore.getRoverDirection().value }}</span>
      </p>
    </div>
  </div>
</template>
