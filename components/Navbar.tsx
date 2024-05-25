import clsx from 'clsx'
import { NavLink } from './NavLink'

interface Props {
  className?: string
}
export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={clsx('grid grid-cols-5', className)}>
      <NavLink href="/">主页</NavLink>
      <NavLink href="/music">音乐</NavLink>
      <NavLink href="/about">关于</NavLink>
      <NavLink href="/news">博客</NavLink>
      <NavLink href="/uses">设备</NavLink>
    </nav>
  )
}
