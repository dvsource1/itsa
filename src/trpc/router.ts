import { publicProcedure, router } from '.'

import DB from 'itsa/server/db'
import { students } from 'itsa/server/db/schema'

export const appRouter = router({
  greeting: publicProcedure.query(async () => {
    try {
      const _students = await DB.select().from(students).execute()
      return JSON.stringify(_students)
    } catch (e: unknown) {
      console.error(e)
      throw e
    }
  }),
})

export type AppRouter = typeof appRouter
