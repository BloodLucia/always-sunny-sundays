import Image from "next/image"
import { Layout } from "../../components/Layout"
import imgUrl from '/public/20240525005236.jpg'

const About: React.FC = () => {
  return (
    <Layout>
       <Image src={imgUrl} className="max-md:w-full md:w-[400px] h-auto"  priority alt="" />
       <div className="text-sm">Photographed at 黑铁Live House, Nanchang</div>
    </Layout>
  )
}

export default About