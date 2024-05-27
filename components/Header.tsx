'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { Brand } from './Brand'
import { Icons } from './Icons'
import { MobileNav } from './MobileNav'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={clsx('sticky top-0 border-b box-border', className)}>
      <div className="md:relative md:max-w-[var(--header-desktop-max-width)] max-md:bg-white md:backdrop-blur-lg md:bg-white/[0.85] py-3 mx-auto flex justify-between items-center max-md:px-4 relative">
        <Brand />
        <NavBar />
        <Icons.Menu onClick={() => setMenuOpen(!menuOpen)} color='rgba(0,0,0,0.9)' className='md:hidden text-4xl' />
        <MobileNav visible={menuOpen} />
      </div>
    </header>
  )
}
