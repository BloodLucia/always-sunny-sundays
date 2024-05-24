import clsx from 'clsx'
import { SITE_TITLE } from '../config'
import { NavLink } from './NavLink'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx('sticky top-0 backdrop-blur-2xl bg-white bg-opacity-80 border-b', className)}>
      <div className='md:max-w-[var(--header-desktop-max-width)] py-3 mx-auto flex max-md:justify-center md:justify-between items-center'>
        <h1>
          <a href="/" className='block w-[80px] h-[80px] object-cover bg-cover bg-[url("/LOGO.svg")] indent-[-9999em]'>
            {SITE_TITLE}
          </a>
        </h1>
        <nav className='grid grid-cols-5 gap-2 max-md:hidden'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/b'>Music</NavLink>
          <NavLink href='/a'>About</NavLink>
          <NavLink href='/c'>News</NavLink>
          <NavLink href='/d'>Uses</NavLink>
        </nav>
      </div>
    </header>
  )
}
