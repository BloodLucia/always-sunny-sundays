import clsx from 'clsx'
import { LinkIcon } from './LinkIcon'

interface Props {
  className?: string
}
export const LinkTree: React.FC<Props> = ({ className }) => {
  return (
    <ol className={clsx('flex flex-col gap-2 justify-center items-center',className)}>
      <LinkIcon href='/' name='Facebook' />
      <LinkIcon href='/' name='Youtube' />
      <LinkIcon href='/' name='Bandcamp' />
      <LinkIcon href='/' name='Spotify' />
    </ol>
  )
}
