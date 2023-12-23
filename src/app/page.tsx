'use client'

import { trpc } from 'itsa/trpc/client'

export default function Home() {
  const { data } = trpc.greeting.useQuery()

  return (
    <main>
      <pre>{data}</pre>
    </main>
  )
}
