import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core'

export const students = pgTable('students', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: text('name'),
  phone: varchar('phone', { length: 256 }),
})
