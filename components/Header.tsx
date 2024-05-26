'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { Brand } from './Brand'
import { Icons } from './Icons'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={clsx('sticky top-0 border-b box-border', className)}>
      <div className="md:max-w-[var(--header-desktop-max-width)] max-md:bg-white md:backdrop-blur-2xl md:bg-white/[0.85] py-3 mx-auto flex justify-between items-center max-md:px-4 relative">
        <Brand />
        <NavBar className="max-md:hidden gap-2" />
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden'>
          <Icons.Menu />
        </button>
      </div>
    </header>
  )
}
