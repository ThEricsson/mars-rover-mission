import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

import { useTerrain } from '@/hooks/useTerrain'
const { analiceTerrainDistance } = useTerrain()

import { useRover } from '@/hooks/useRover'
const { findRoverPosition } = useRover()

const terrainDistance = analiceTerrainDistance()

export const useRoverStore = defineStore('roverStore', () => {
  const connected = ref(false)
  const getConnected = () => readonly(connected)

  const position = ref({ x: 0, y: 0 })
  const getRoverPosition = () => readonly(position)

  const navigationHistory = ref([])
  const getNavigationHistory = () => readonly(navigationHistory)

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

  const findRover = () => {
    position.value = findRoverPosition()
    connected.value = true
  }

  return {
    findRover,
    getConnected,
    getRoverPosition,
    getNavigationHistory,
    commandReader,
    allowedCommands,
  }
})
