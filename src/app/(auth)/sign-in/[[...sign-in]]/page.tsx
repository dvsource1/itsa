import { SignIn } from '@clerk/nextjs'

const Page: React.FC = () => {
  return <SignIn afterSignInUrl={'/'} afterSignUpUrl={'/'} />
}

export default Page
