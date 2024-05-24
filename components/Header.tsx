import clsx from 'clsx'
import { SITE_TITLE } from '../config'
import { NavLink } from './NavLink'
import logoUrl from '/public/logo.png'
import Image from 'next/image'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx('sticky top-0 bg-white bg-opacity-80 backdrop-blur-2xl', className)}>
      <div className='md:max-w-[var(--header-desktop-max-width)] h-[var(--header-height)] mx-auto flex justify-between items-center'>
        <h1 className='text-2xl max-md:hidden'>
          <a href="/">{SITE_TITLE}</a>
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
