import * as schema from './schema'

import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

dotenv.config()

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const connectionString = process.env.DATABASE_URL

const client = postgres(connectionString, { max: 1 })
const DB = drizzle(client, { schema })

export default DB
