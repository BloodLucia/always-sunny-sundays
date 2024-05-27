import clsx from 'clsx'
import { NavLink } from './NavLink'

interface Props {
  className?: string
  isMobile?: boolean
}
export const NavBar: React.FC<Props> = ({ className }) => {

  return (
    <nav className={clsx('max-md:hidden grid grid-cols-4 gap-3', className)}>
      <NavLink href="/">主页</NavLink>
      <NavLink href="/music">音乐</NavLink>
      <NavLink href="/about">关于</NavLink>
      <NavLink href="/blog">博客</NavLink>
    </nav>
  )
}
