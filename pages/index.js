import Layout from '../components/Layout'
import Swiper from '../components/Swiper'
import Trending from '../components/Trending'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home | Starlova Publishing">
      <div className="content">
        <div className="section-content">
          <div className="section">
            <h4>Premium Books</h4>
          </div>
          <Swiper />
        </div>
        <div className="section">
          <h4>Trending Books</h4>
        </div>
        <div className="section-content">
          <Trending />
        </div>
      </div>
    </Layout>
  )
}
