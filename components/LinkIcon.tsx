import { SVGAttributes } from "react";
import { Icons } from "./Icons"

interface Props extends SVGAttributes<SVGElement> {
  href?: string,
  name: keyof typeof Icons
}
export const LinkIcon: React.FC<Props> = (props) => {
  const { href, name } = props
  const renderIcon = (key: keyof typeof Icons, props: SVGAttributes<SVGAElement>) => {
    const Component = Icons[key]
    if (!Component) throw new Error(`No component found for key: ${key}`);
    return <Component {...props} />
  }
  return (
    <a href={href}>
      {renderIcon(name, props)}
    </a>
  )
}