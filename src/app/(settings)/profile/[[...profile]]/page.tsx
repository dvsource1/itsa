import { UserProfile } from '@clerk/nextjs'

const Page: React.FC = () => {
  return <UserProfile path="/profile" routing="path" />
}

export default Page
