<script setup lang="ts">
// Imports
import { onMounted, onBeforeUnmount } from 'vue'

import { useRoverStore } from '@/stores/rover'

import Terminal from 'primevue/terminal'
import TerminalService from 'primevue/terminalservice'
// Props
// Hooks
const roverStore = useRoverStore()
// Values
// Errors
// Methods
const commandsHandler = (command: string) => {
  let response: string = 'Unknown command:'
  const commandList = command.split('')

  commandList.map((commandLetter) => {
    if (!roverStore.allowedCommands.includes(commandLetter)) {
      response = `Invalid command found: ${commandLetter}`
    } else {
      roverStore.commandReader(commandLetter as 'F' | 'L' | 'R')
    }
  })

  TerminalService.emit('response', response)
}

onMounted(() => {
  TerminalService.on('command', commandsHandler)
})

onBeforeUnmount(() => {
  TerminalService.off('command', commandsHandler)
})
</script>
<template>
  <div>
    <Terminal welcomeMessage="Welcome to Rover Control Center" prompt="rover_directions $" />
  </div>
</template>
