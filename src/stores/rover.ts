import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

import { useRover } from '@/hooks/useRover'
const { findRoverPosition } = useRover()

import { useTerrain } from '@/hooks/useTerrain'
const { isValidPosition } = useTerrain()

import { CARDINAL_POSITIONS, MOVE_DISTANCE } from '@/constants/global'

export const useRoverStore = defineStore('roverStore', () => {
  // Rover states
  const position = ref({ x: 0, y: 0 })
  const direction = ref<'N' | 'E' | 'S' | 'W'>('N')

  const navigationHistory = ref<{ date: Date; x: number; y: number; successful: boolean }[]>([])
  const connected = ref(false)

  // Movements
  const move = (inputX: number, inputY: number) => {
    console.log('Moving rover', { inputX, inputY })
    position.value.x += inputX
    position.value.y += inputY
  }

  const moveBackward = () => {
    const [inputX, inputY] = cardinalPointTranslator[direction.value]
    move(-inputX, -inputY)
  }

  const moveForward = () => {
    const [inputX, inputY] = cardinalPointTranslator[direction.value]
    move(inputX, inputY)

    navigationHistory.value.push({ date: new Date(), ...position.value, successful: true })

    if (!isValidPosition(position.value.x, position.value.y)) {
      const lastMove = navigationHistory.value.pop()
      if (lastMove) {
        navigationHistory.value.push({ ...lastMove, successful: false })
        moveBackward()
        throw new Error(`Obstacle found at: (X ${lastMove.x}, Y ${lastMove.y}); moving back`)
      }

      throw new Error('No navigation history')
    }
  }

  // Turn left and right
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

  // Command reader
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

    const now = new Date()
    navigationHistory.value.push({
      date: now,
      x: position.value.x,
      y: position.value.y,
      successful: true,
    })

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
