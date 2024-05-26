import { SVGAttributes } from "react";
import { IconProps, Icons } from "./Icons"

// type IconKeys = keyof typeof Icons
// 使用 keyof typeof 从 Icons 对象中提取键名
type IconKeys = keyof typeof Icons;

// 定义 Props 接口，其中包含 Icons 的所有键作为字段
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