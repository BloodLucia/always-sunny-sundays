import clsx from 'clsx'
import { NavLink } from './NavLink'

interface Props {
  className?: string
}
export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={clsx('grid grid-cols-5', className)}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/music">Music</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/news">News</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </nav>
  )
}
