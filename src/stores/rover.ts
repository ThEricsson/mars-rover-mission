import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

import { useTerrain } from '@/hooks/useTerrain'
const { analiceTerrainDistance } = useTerrain()

import { useRover } from '@/hooks/useRover'
const { findRoverPosition } = useRover()

const terrainDistance = analiceTerrainDistance()

export const useRoverStore = defineStore('roverStore', () => {
  let cardinalDirections = ['W', 'S', 'E']

  const position = ref({ x: 0, y: 0 })
  const direction = ref<'N' | 'W' | 'S' | 'E'>('N')

  const navigationHistory = ref<{ x: number; y: number }[]>([])
  const connected = ref(false)

  const move = (inputX: number, inputY: number) => {
    position.value.x += inputX
    position.value.y += inputY
  }

  const moveForward = () => {
    const [inputX, inputY] = cardinalPointTranslator[direction.value]

    navigationHistory.value.push(position.value)
    move(inputX, inputY)
  }

  const turnRight = () => {
    let currentDirection = direction.value
    let nextDirection = cardinalDirections.pop()!
    cardinalDirections.unshift(currentDirection)
    direction.value = nextDirection as 'N' | 'W' | 'S' | 'E'
  }

  const turnLeft = () => {
    let currentDirection = direction.value
    let nextDirection = cardinalDirections.shift()!
    cardinalDirections.push(currentDirection)
    direction.value = nextDirection as 'N' | 'W' | 'S' | 'E'
  }

  const cardinalPointTranslator = {
    N: [0, 5],
    S: [0, -5],
    E: [5, 0],
    W: [-5, 0],
  }

  const commandTranslator = {
    F: moveForward,
    L: turnLeft,
    R: turnRight,
  }
  const allowedCommands = Object.keys(commandTranslator)

  const commandReader = (commandLetter: 'F' | 'L' | 'R') => {
    commandTranslator[commandLetter]()
  }

  const findRover = () => {
    position.value = findRoverPosition()
    connected.value = true
  }

  const getRoverPosition = () => readonly(position)
  const getRoverDirection = () => readonly(direction)
  const getNavigationHistory = () => readonly(navigationHistory)
  const getConnected = () => readonly(connected)

  return {
    findRover,
    getConnected,
    getRoverPosition,
    getRoverDirection,
    getNavigationHistory,
    commandReader,
    allowedCommands,
  }
})
