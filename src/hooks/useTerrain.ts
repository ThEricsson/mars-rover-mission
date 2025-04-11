import { useTerrainStore } from '@/stores/terrain'

export const useTerrain = () => {
  const analiceTerrainDistance = () => {
    // Aqui es pot consultar a una punt d'accés per obtenir la distancia del "planeta"
    return { width: 200, height: 200 }
  }

  const isValidPosition = (x: number, y: number) => {
    const terrainStore = useTerrainStore()
    const { minX, maxX, minY, maxY } = terrainStore.getTerrainSize()
    return x >= minX && x <= maxX && y >= minY && y <= maxY
  }

  return { analiceTerrainDistance, isValidPosition }
}
