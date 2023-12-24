import { ClerkProvider } from '@clerk/nextjs'
import { PropsWithChildren } from 'react'
import TRPCProvider from 'itsa/trpc/TRPCProvider'

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </ClerkProvider>
  )
}

export default Provider
