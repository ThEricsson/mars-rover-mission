import { useTerrain } from '@/hooks/useTerrain'

import { CARDINAL_POSITIONS } from '@/constants/global'

const { analiceTerrainDistance } = useTerrain()

export const useRover = () => {
  const findRoverPosition = () => {
    const { x: terrainX, y: terrainY } = analiceTerrainDistance()

    const x = Math.floor(Math.random() * (terrainX + 1))
    const y = Math.floor(Math.random() * (terrainY + 1))

    const cardinalPosition =
      CARDINAL_POSITIONS[Math.floor(Math.random() * CARDINAL_POSITIONS.length)]

    return { x, y, cardinalPosition }
  }
  return { findRoverPosition }
}
