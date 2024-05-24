import clsx from 'clsx'
import { SITE_TITLE } from '../config'
import { NavLink } from './NavLink'
import { IconMenu } from './icons'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx('sticky top-0 border-b bg-white/80 max-md:bg-white/90 backdrop-blur-2xl', className)}>
      <div className='md:max-w-[var(--header-desktop-max-width)] py-3 mx-auto flex max-md:justify-center justify-between items-center max-md:px-4'>
        <h1>
          <a href="/" className='block w-[80px] h-[80px] object-cover bg-cover bg-[url("/LOGO.svg")] indent-[-9999em]'>
            {SITE_TITLE}
          </a>
        </h1>
        {/* <a href="/" className='md:hidden px-2.5 py-1 border-2 border-[#8a8a8a] rounded-md'>
          <IconMenu color='#cccccc' width={40} height={40} />
        </a> */}
        <nav className='grid grid-cols-5 gap-2 max-md:hidden'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/b'>Music</NavLink>
          <NavLink href='/a'>About</NavLink>
          <NavLink href='/c'>News</NavLink>
          <NavLink href='/d'>Uses</NavLink>
        </nav>
      </div>
      <nav className='md:hidden h-[48px] items-stretch grid grid-cols-5 gap-0'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/b'>Music</NavLink>
          <NavLink href='/a'>About</NavLink>
          <NavLink href='/c'>News</NavLink>
          <NavLink href='/d'>Uses</NavLink>
        </nav>
    </header>
  )
}
