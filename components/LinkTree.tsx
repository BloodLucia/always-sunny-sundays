import clsx from "clsx"

interface Props {
    className?: string
}
export const LinkTree: React.FC<Props> = ({ className }) => {
    return  (
        <ol className={clsx('flex flex-col justify-center items-center gap-3', className)}>
            <a href="/">网易云</a>
            <a href="/">QQ音乐</a>
            <a href="/">Twitter</a>
            <a href="/">Ins</a>
            <a href="/">Facebook</a>
            <a href="/">Threads</a>
            <a href="/">Bandcamp</a>
        </ol>
    )
}