import Image from 'next/image'
import bigImgUrl from '/public/Dmjvbs1UUAAP6nN.jpg'
import { LinkTree } from '../components/LinkTree'
import { Layout } from '../components/Layout'
import { SITE_INSTRUCTION, SITE_TITLE } from '../config'

export default function Home() {
  return (
    <Layout>
      <Image src={bigImgUrl} decoding="async" priority alt={SITE_TITLE} />
      <div className="text-center text-sm pt-8 pb-8 border-b">{SITE_INSTRUCTION}</div>
      <LinkTree direction="row" className="pt-16" />
    </Layout>
  )
}
