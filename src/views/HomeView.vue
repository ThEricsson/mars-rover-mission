<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Image from 'primevue/image'
import roverNoBg from '@/assets/imgs/roverNoBg.png'
</script>

<template>
  <main class="h-screen flex flex-col justify-center">
    <div class="card grid grid-cols-2 gap-4 mx-auto shadow-xl">
      <div class="col text-center flex flex-col justify-center p-3">
        <h1 class="text-4xl font-bold">Mars Rover Mission</h1>
        <p class="text-lg">Mars Rover monitoring and motion control software</p>
        <RouterLink to="/controler">
          <Button label="Go control center" class="mt-3" />
        </RouterLink>
      </div>
      <div class="col flex justify-center">
        <Image :src="roverNoBg" alt="Image" width="250" height="250" />
      </div>
    </div>
  </main>
</template>
