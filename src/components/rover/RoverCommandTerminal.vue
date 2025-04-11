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

const checkComand = (commandList: string[]) => {
  let isValid = true

  commandList.map((commandLetter) => {
    if (!roverStore.allowedCommands.includes(commandLetter)) {
      isValid = false
    }
  })

  return isValid
}

const commandsHandler = (command: string) => {
  let response: string = ''

  try {
    const commandList = command.split('')

    if (!checkComand(commandList)) {
      throw new Error('Invalid command; only F, L, and R are allowed')
    }

    commandList.map((commandLetter) => {
      roverStore.commandReader(commandLetter as 'F' | 'L' | 'R')
    })
  } catch (error) {
    response = `Error: ${error}`
  }

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
  <div class="h-full">
    <Terminal
      style="background-color: black; color: green; border: 3px gray solid"
      welcomeMessage="Welcome to RCT! (Rover Control Terminal)"
      prompt="rover_command $"
    />
  </div>
</template>
