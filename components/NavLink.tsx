'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

interface Props {
  href?: string
  className?: string
}
export const NavLink: React.FC<PropsWithChildren<Props>> = ({ href, className, children, }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const activeStyle = isActive && 'border-2 border-orange-500 text-orange-500'
  return (
    <a href={href} className={clsx('px-3 py-1.5 rounded-md inline-flex shrink-0 justify-center items-center', activeStyle, className)}>
      {children}
    </a>
  )
}
