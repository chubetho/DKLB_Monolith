import { treaty } from '@elysiajs/eden'
import type { App as _App } from '@dklb/api'

export function useApi() {
  return treaty<_App>('localhost:4000')
}
export type App = _App
