import { useTerrainStore } from '@/stores/terrain'

import { CARDINAL_POSITIONS } from '@/constants/global'
import { getRandomNumber } from '@/utils'

export const useRover = () => {
  const findRoverPosition = () => {
    const { getTerrainSize } = useTerrainStore()
    const { minX, maxX, minY, maxY } = getTerrainSize()

    const x = getRandomNumber(minX, maxX)
    const y = getRandomNumber(minY, maxY)

    const cardinalPosition =
      CARDINAL_POSITIONS[Math.floor(Math.random() * CARDINAL_POSITIONS.length)]

    return { x, y, cardinalPosition }
  }

  return { findRoverPosition }
}
