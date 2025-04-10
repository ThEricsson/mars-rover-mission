import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

import { CARDINAL_POSITIONS } from '@/constants/global'

import { useTerrain } from '@/hooks/useTerrain'
const { analiceTerrainDistance } = useTerrain()

import { useRover } from '@/hooks/useRover'
const { findRoverPosition } = useRover()

const terrainDistance = analiceTerrainDistance()

export const useRoverStore = defineStore('roverStore', () => {
  const MOVE_DISTANCE = 5

  const position = ref({ x: 0, y: 0 })
  const direction = ref<'N' | 'E' | 'S' | 'W'>('N')

  const navigationHistory = ref<Record<string, { x: number; y: number }>>({})
  const connected = ref(false)

  const move = (inputX: number, inputY: number) => {
    position.value.x += inputX
    position.value.y += inputY
  }

  const moveForward = () => {
    const [inputX, inputY] = cardinalPointTranslator[direction.value]

    const now = new Date()

    navigationHistory.value[now.toISOString()] = { ...position.value }
    move(inputX, inputY)
  }

  const turnRight = () => {
    const currentIndex = CARDINAL_POSITIONS.indexOf(direction.value)
    direction.value = CARDINAL_POSITIONS[(currentIndex + 1) % 4] as 'N' | 'E' | 'S' | 'W'
  }

  const turnLeft = () => {
    const currentIndex = CARDINAL_POSITIONS.indexOf(direction.value)
    direction.value = CARDINAL_POSITIONS[(currentIndex + 3) % 4] as 'N' | 'E' | 'S' | 'W'
  }

  const cardinalPointTranslator = {
    N: [0, MOVE_DISTANCE],
    S: [0, -MOVE_DISTANCE],
    E: [MOVE_DISTANCE, 0],
    W: [-MOVE_DISTANCE, 0],
  }

  const commandTranslator = {
    F: moveForward,
    L: turnLeft,
    R: turnRight,
  }
  const allowedCommands = Object.keys(commandTranslator)

  const commandReader = (commandLetter: 'F' | 'L' | 'R') => {
    if (!allowedCommands.includes(commandLetter)) {
      throw new Error(`Comando no permitido: ${commandLetter}`)
    }
    commandTranslator[commandLetter]()
  }

  const findRover = () => {
    const cordenatesAndDirection = findRoverPosition()
    position.value = { x: cordenatesAndDirection.x, y: cordenatesAndDirection.y }
    direction.value = cordenatesAndDirection.cardinalPosition as 'N' | 'E' | 'S' | 'W'

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
