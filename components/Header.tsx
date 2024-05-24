import clsx from 'clsx'
import { SITE_TITLE } from '../config'
import { NavLink } from './NavLink'
import { IconMenu } from './icons'
import Image from 'next/image'
import { Navbar } from './Navbar'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx('sticky top-0 border-b bg-white/80 max-md:bg-white/90 backdrop-blur-2xl box-border', className)}>
      <div className='md:max-w-[var(--header-desktop-max-width)] py-3 mx-auto flex max-md:justify-center justify-between items-center max-md:px-4'>
        <h1>
          <a href="/">
            <Image src="/LOGO.svg" alt={SITE_TITLE} width={80} height={80} priority decoding='async' />
          </a>
        </h1>
        <Navbar className='max-md:hidden gap-2' />
      </div>
      <Navbar className='md:hidden h-[48px]' />
    </header>
  )
}
