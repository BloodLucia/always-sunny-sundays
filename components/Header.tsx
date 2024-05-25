'use client'
import clsx from 'clsx'
import { MouseEventHandler, useState } from 'react'
import { Navbar } from './Navbar'
import { IconMenu } from './icons'
import { Brand } from './Brand'

interface Props {
  className?: string
}
export const Header: React.FC<Props> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={clsx('sticky top-0 border-b box-border', className)}>
      <div className="md:max-w-[var(--header-desktop-max-width)] max-md:backdrop-blur-md backdrop-blur-2xl bg-white/[0.85] py-3 mx-auto flex justify-between items-center max-md:px-4 relative">
        <Brand />
        <Navbar className="max-md:hidden gap-2" />
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden'>
          <IconMenu />
        </button>
      </div>
    </header>
  )
}
