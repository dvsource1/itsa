'use client'

import { trpc } from 'itsa/trpc/client'
import { useState } from 'react'

const Home: React.FC = () => {
  const [greeting, setGreeting] = useState('')

  const queryGreeting = () => {
    const { data } = trpc.greeting.useQuery()
    setGreeting(data ?? 'error')
  }

  return (
    <main>
      home page
      <pre>{greeting}</pre>
      <button onClick={queryGreeting}>Greeting</button>
    </main>
  )
}

export default Home
