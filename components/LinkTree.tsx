import clsx from "clsx"
import { IconWyy, IconSpotify, IconQQyy } from "./icons/"

interface Props {
    className?: string
}
export const LinkTree: React.FC<Props> = ({ className }) => {
    return  (
        <ol className={clsx('flex flex-col justify-center items-center gap-3', className)}>
            <a href="/">
                <IconWyy />
            </a>
            <a href="/">
                <IconQQyy />
            </a>
            <a href="/">Twitter</a>
            <a href="/">Ins</a>
            <a href="/">Facebook</a>
            <a href="/">Threads</a>
            <a href="/">Bandcamp</a>
        </ol>
    )
}