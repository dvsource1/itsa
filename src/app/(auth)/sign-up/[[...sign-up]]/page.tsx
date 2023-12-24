import { SignUp } from '@clerk/nextjs'

const Page: React.FC = () => {
  return <SignUp afterSignInUrl={'/'} afterSignUpUrl={'/'} />
}

export default Page
