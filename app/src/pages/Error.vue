<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { UiButton } from '../components/ui/UiButton'
import MdiChevronRight from '~icons/mdi/chevron-right'

let timer: ReturnType<typeof setInterval>

onMounted(() => {
  const isDev = import.meta.env.DEV
  if (!isDev)
    return

  const router = useRouter()
  timer = setInterval(() => {
    router.push('/')
  }, 500)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="py-5 px-5 grid grid-cols-2 gap-5">
    <div class="space-y-8">
      <h2 class="text-primary uppercase font-bold text-2xl">
        404 - Seite nicht gefunden
      </h2>

      <p>Es tut uns leid. Die von Ihnen gewünschte Seite konnte leider nicht gefunden werden.</p>

      <UiButton to="/">
        zur startseite
        <MdiChevronRight />
      </UiButton>
    </div>
    <div class="object-cover">
      <img src="../assets/404.jpg" alt="notfound" class="w-full h-full">
    </div>
  </div>
</template>
