<script setup lang="ts">
// Imports
import { ScrollPanel } from 'primevue'
import { useRoverStore } from '@/stores/rover'
// Props
// Hooks
const roverStore = useRoverStore()
// Values
// Errors
// Methods
</script>
<template>
  <ScrollPanel class="grid grid-row h-50 bg-black p-3 border-3 border-gray-500 rounded-lg">
    <div class="broder divide" v-for="position in roverStore.getNavigationHistory().value">
      <p class="text-green-500">{{ position }}</p>
    </div>
  </ScrollPanel>
</template>
