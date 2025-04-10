<script setup lang="ts">
// Imports
import RoverCommandTerminal from '@/components/rover/RoverCommandTerminal.vue'
import RoverPositionDisplay from '@/components/rover/RoverPositionDisplay.vue'

import { useRoverStore } from '@/stores/rover'

import { Message } from 'primevue'
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
        <div class="subContent h-full pb-6">
          <div class="mt-3 h-full">
            <div v-if="roverStore.getConnected().value">
              <h2 class="text-3xl text-center mb-3">Command terminal</h2>
              <RoverCommandTerminal />
            </div>

            <Button v-else class="w-full h-50" severity="success" @click="roverStore.findRover()"
              ><i class="pi pi-link" style="font-size: 2.5rem" /><span class="text-4xl"
                >Connect to the rover</span
              ></Button
            >
          </div>
        </div>
        <div>
          <div class="subContent">
            <h2 class="text-3xl text-center">Command history</h2>
            <div class="mt-3">
              <span v-if="roverStore.getConnected().value"></span>
              <div v-else class="flex flex-col items-center">
                <Message icon="pi pi-exclamation-triangle" severity="warn"
                  >No connection to the rover</Message
                >
              </div>
            </div>
          </div>
          <div class="subContent">
            <h2 class="text-3xl text-center">Rover position</h2>
            <div class="mt-3">
              <RoverPositionDisplay v-if="roverStore.getConnected().value" />
              <div v-else class="flex flex-col items-center">
                <Message icon="pi pi-exclamation-triangle" severity="warn"
                  >No connection to the rover</Message
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
