import Image from 'next/image'
import { SITE_TITLE } from "@/config"

export const Brand: React.FC = () => {
  return (
    <h1>
      <a href="/">
        <Image src="/LOGO.svg" alt={SITE_TITLE} width={80} height={80} priority decoding="async" />
      </a>
    </h1>
  )
}