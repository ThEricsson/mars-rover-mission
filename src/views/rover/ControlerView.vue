<script setup lang="ts">
// Imports
import RoverCommandTerminal from '@/components/rover/RoverCommandTerminal.vue'
import RoverPositionDisplay from '@/components/rover/RoverPositionDisplay.vue'
import RoverNavigationHistory from '@/components/rover/RoverNavigationHistory.vue'

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
  <main class="min-h-screen">
    <div class="content mt-9 m-5">
      <h1 class="text-center text-4xl mb-4">Rover Control Center</h1>
      <div class="grid md:grid-cols-2 gap-4 h-full">
        <div class="subContent pb-6">
          <div v-if="roverStore.getConnected().value">
            <h2 class="text-3xl text-center mb-3">Command terminal</h2>
            <RoverCommandTerminal />
          </div>
          <div v-else class="flex h-full items-center">
            <Button class="w-full h-50" severity="success" @click="roverStore.findRover()"
              ><i class="pi pi-link" style="font-size: 2.5rem" /><span class="text-4xl"
                >Connect to the rover</span
              ></Button
            >
          </div>
        </div>
        <div class="grid gap-4">
          <div class="subContent">
            <h2 class="text-3xl text-center">Command history</h2>
            <div class="mt-3">
              <RoverNavigationHistory v-if="roverStore.getConnected().value" />
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
