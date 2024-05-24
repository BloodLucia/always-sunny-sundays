type IconSizeEnum = 'sm' | 'md' | 'lg' | 'normal'
interface Props {
    icon: React.ReactNode
    link?: string
    size?: IconSizeEnum
}
const iconSizeStyleMap: Record<IconSizeEnum, any> = {
    sm: '1em',
    md: '2em',
    lg: '3em',
    normal: '2.5em'
}

export const LinkIcon: React.FC<Props> = ({ icon, link = '/', size = 'normal' }) => {
    return (
        <a href={link}>
            
        </a>
    )
}