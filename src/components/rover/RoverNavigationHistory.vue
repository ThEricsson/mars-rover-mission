<script setup lang="ts">
// Imports
import { ref, computed } from 'vue'
import { useRoverStore } from '@/stores/rover'

import { DataTable, Column } from 'primevue'
// Props
// Hooks
const { getNavigationHistory } = useRoverStore()

const navigationHistory = computed(() => {
  const history = getNavigationHistory().value
  if (history) {
    return [...history]
  }
  return []
})

// Values
// Errors
// Methods
</script>
<template>
  <DataTable
    :value="navigationHistory"
    style="max-height: 20rem; overflow-y: auto; height: 20rem"
    stripedRows
    showGridlines
  >
    <Column field="date" header="Timestamp">
      <template #body="slotProps">
        {{ slotProps.data.date.toLocaleString() }}
      </template></Column
    >
    <Column field="x" header="X" />
    <Column field="y" header="Y" />
    <Column field="successful" header="Successful movement">
      <template #body="slotProps">
        <span
          :class="slotProps.data.successful ? 'text-green-500 uppercase' : 'text-red-500 uppercase'"
          >{{ slotProps.data.successful }}</span
        >
      </template>
    </Column>
  </DataTable>
</template>
