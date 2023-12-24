// react functional component with nextjs Link to home page '/'

import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <>
      <Link href={'/'}>Logo</Link>
    </>
  )
}

export default Logo
