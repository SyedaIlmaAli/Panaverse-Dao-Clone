import Image from 'next/image'
import Logo from '@/assets/images/logo.webp'
import Link from 'next/link'
import Wrapper from '@/components/shared/Wrapper'


function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white'>

    <Wrapper>
      <div className="flex justify-between py-4  items-center border-b-2">
        {/* Logo */}
        <div>
          <Image src={Logo} alt='Logo'/>
        </div>
        {/* Navigation Bar */}
        <ul className="flex space-x-8 font-medium hover:cursor-pointer">
          <Link href={"/"}>
          <li>Home</li>
          </Link>
          <Link href={'/courses'}>
          <li>Courses</li>
          </Link>
        </ul>
      </div>
     </Wrapper>
    </header>
  )
}

export default Header
