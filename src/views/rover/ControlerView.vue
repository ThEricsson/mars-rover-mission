<script setup lang="ts">
// Imports
import RoverCommandTerminal from '@/components/rover/RoverCommandTerminal.vue'
import { useRoverStore } from '@/stores/rover'
// Props
// Hooks
const roverStore = useRoverStore()
// Values
// Errors
// Methods
</script>
<template>
  <main class="h-screen">
    <div class="content m-6">
      <h1 class="text-center text-4xl mb-4">Rover control center</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="subContent">
          <h2 class="text-3xl text-center">Command terminal</h2>
          <div class="mt-2">
            <RoverCommandTerminal v-if="roverStore.getConnected().value" />
            <div v-else class="flex flex-col items-center">
              <Button
                class="btn btn-primary my-auto"
                label="Connect to the rover"
                @click="roverStore.findRover()"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="subContent">
            <h2 class="text-3xl text-center">Command history</h2>
          </div>
          <div class="subContent">
            <h2 class="text-3xl text-center">Rover position</h2>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
