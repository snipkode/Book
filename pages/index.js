import Layout from '../components/Layout'
import Swiper from '../components/Swiper'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home | Starlova Publishing">
       <div className="content">
         <div className="banner">
           <Swiper />
         </div>
       </div>
    </Layout>
  )
}
