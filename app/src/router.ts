import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export async function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: () => import('./pages/Error.vue'),
      },
    ],
  })

  router.onError(() => router.push({ name: 'Error' }))

  app.use(router)
}
