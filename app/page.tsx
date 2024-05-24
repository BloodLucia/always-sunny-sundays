import Image from 'next/image'
import bigImgUrl from '/public/Dmjvbs1UUAAP6nN.jpg'
import { LinkTree } from '../components/LinkTree'
import { Main } from '../components/Layout'
import { SITE_INSTRUCTION, SITE_TITLE } from '../config'

export default function Home() {
  return (
    <Main>
      <div className="py-14 md:border-t md:border-b">
        <Image src={bigImgUrl} decoding="async" priority alt={SITE_TITLE} />
        <div className="text-center text-sm pt-8">{SITE_INSTRUCTION}</div>
        <LinkTree className="pt-16" />
      </div>
    </Main>
  )
}
