import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { numbers } from './routes/numbers'

export const PORT = import.meta.env.PORT || 5001

// eslint-disable-next-line unused-imports/no-unused-vars
const app = new Elysia()
  .derive(({ request }) => {
    const origin = request.headers.get('origin')
    return origin === 'http://localhost:10000'
      ? { authorized: true }
      : { authorized: false }
  })
  .use(
    cors({
      origin: /http:\/\/localhost:10000/,
      allowedHeaders: ['Content-Type'],
    }),
  )

  // routes
  .use(numbers())

  .listen(PORT)

export type App = typeof app
