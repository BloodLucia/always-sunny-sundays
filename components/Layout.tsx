import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import clsx from 'clsx'

interface Props {
  className?: string
}
export const Main: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <>
      <Header />
      <main className={clsx('md:max-w-[1000px] mx-auto py-20 max-md:py-16 min-h-[var(--main-height)]', className)}>
        {children}
      </main>
      <Footer />
    </>
  )
}
