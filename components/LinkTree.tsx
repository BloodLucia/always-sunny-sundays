import clsx from 'clsx'
import { IconWyy, IconSpotify, IconQQyy, IconFacebook, IconBandcamp, IconInstagram } from './icons'

type LinkTreeDirection = 'row' | 'column'
interface Props {
  className?: string
  gap?: number
  direction: LinkTreeDirection
}
const styleMap: Record<LinkTreeDirection, any> = {
  row: '',
  column: 'flex-col',
}
export const LinkTree: React.FC<Props> = ({ direction = 'row', gap = 3, className }) => {
  return (
    <ol className={clsx(styleMap[direction], `flex justify-center items-center gap-3`, className)}>
      <a href="/">
        <IconWyy />
      </a>
      <a href="/">
        <IconQQyy />
      </a>
      <a href="/">
        <IconSpotify />
      </a>
      <a href="/">
        <IconFacebook />
      </a>
      <a href="">
        <IconInstagram />
      </a>
      <a href="/">
        <IconBandcamp />
      </a>
    </ol>
  )
}
