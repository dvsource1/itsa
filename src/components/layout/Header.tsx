'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header>
      header
      <Logo />
      <SignedIn>
        SignedIn
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        SignedOut
        <SignInButton />
      </SignedOut>
    </header>
  )
}

export default Header
