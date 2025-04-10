import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

export const useRoverStore = defineStore('roverStore', () => {
  const position = ref({ x: 0, y: 0 })
  const getRoverPosition = () => readonly(position)

  const move = (inputX: number, inputY: number) => {
    position.value.x += inputX
    position.value.y += inputY
  }

  const moveUp = () => {
    move(0, 5)
  }

  const moveLeft = () => {
    move(-5, 0)
  }

  const moveRight = () => {
    move(5, 0)
  }

  const commandTranslator = {
    F: moveUp,
    L: moveLeft,
    R: moveRight,
  }
  const allowedCommands = Object.keys(commandTranslator)

  const commandReader = (commandLetter: 'F' | 'L' | 'R') => {
    commandTranslator[commandLetter]()
  }

  return { getRoverPosition, commandReader, allowedCommands }
})
