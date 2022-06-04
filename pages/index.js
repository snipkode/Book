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
            <h2>Premium Books</h2>
          </div>
          <Swiper />
        </div>
        <div className="section">
          <h2>Trending Books</h2>
        </div>
        <div className="section-content">
          <Trending />
        </div>
      </div>
    </Layout>
  )
}
