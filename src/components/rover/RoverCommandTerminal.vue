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
  let response: string = ''
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
  <div class="h-100">
    <Terminal
      style="background-color: black; color: green; border: 3px gray solid"
      welcomeMessage="Welcome to RCT! (Rover Control Terminal)"
      prompt="rover_command $"
    />
  </div>
</template>
