'use client'
import clsx from 'clsx'
import { useRef } from 'react'
import { NavLink } from './NavLink'

interface Props {
  visible?: boolean
}
export const MobileNav: React.FC<Props> = ({ visible = false }) => {
  const navRef = useRef(null)
  return (
    <nav   
    ref={navRef}   
    // grid-rows-4 justify-items-center place-items-center bg-white/90 backdrop-blur-lg
    className={
      clsx(
        'md:hidden absolute top-[100%] left-0 right-0 z-10 overflow-hidden w-full border-t grid grid-rows-[0fr] transition-[grid-template-rows] duration-150 ease-out',
        visible ? 'grid-rows-[1fr] py-4' : 'py-0' 
      )
    }>
      <div className='grid grid-rows-4 overflow-hidden box-content justify-items-center place-items-center bg-white/90 backdrop-blur-lg'>
        <NavLink href='/'>主页</NavLink>
        <NavLink href='/music'>音乐</NavLink>
        <NavLink href='/blog'>博客</NavLink>
        <NavLink href='/about'>关于</NavLink> 
      </div>
  </nav>
  )
}