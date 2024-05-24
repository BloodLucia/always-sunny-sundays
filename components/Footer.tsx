import { SITE_TITLE } from '../config'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[48px] border-t bg-white flex justify-center items-center text-sm">
      &copy; {new Date().getFullYear()} {SITE_TITLE}
    </footer>
  )
}
