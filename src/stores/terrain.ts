import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

import { useTerrain } from '@/hooks/useTerrain'

const { analiceTerrainDistance } = useTerrain()

export const useTerrainStore = defineStore('terrainStore', () => {
  const terrainSize = ref({ width: 0, height: 0 })

  const setTerrainSize = (width: number, height: number) => {
    terrainSize.value.width = width
    terrainSize.value.height = height
  }

  const getTerrainSize = () => {
    const { width, height } = readonly(terrainSize.value)
    return {
      minX: -Math.floor(width / 2),
      maxX: Math.floor(width / 2),
      minY: -Math.floor(height / 2),
      maxY: Math.floor(height / 2),
    }
  }

  const initializeTerrainSize = () => {
    const { width, height } = analiceTerrainDistance()
    setTerrainSize(width, height)
  }

  initializeTerrainSize()
  return { getTerrainSize }
})
