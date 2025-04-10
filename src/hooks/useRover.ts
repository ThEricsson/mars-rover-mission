import { useTerrain } from '@/hooks/useTerrain'

const { analiceTerrainDistance } = useTerrain()

export const useRover = () => {
  const findRoverPosition = () => {
    const { x: terrainX, y: terrainY } = analiceTerrainDistance()

    const x = Math.floor(Math.random() * (terrainX + 1))
    const y = Math.floor(Math.random() * (terrainY + 1))

    return { x, y }
  }
  return { findRoverPosition }
}
