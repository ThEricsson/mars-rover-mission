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
    <div
      class="content text-center text-2xl flex flex-col md:flex-row justify-center items-center gap-2"
    >
      <span class="font-bold">X </span>
      <span class="font-bold text-red-500">{{ roverStore.getRoverPosition().value.x }}</span>
    </div>
    <div
      class="content text-center text-2xl flex flex-col md:flex-row justify-center items-center gap-2"
    >
      <span class="font-bold">Y </span>
      <span class="font-bold text-blue-500">{{ roverStore.getRoverPosition().value.y }}</span>
    </div>
    <div
      class="content text-center text-2xl flex flex-col md:flex-row justify-center items-center gap-2"
    >
      <span class="font-bold text-2xl">CP </span>
      <span class="font-bold text-2xl text-emerald-500">{{
        roverStore.getRoverDirection().value
      }}</span>
    </div>
  </div>
</template>
