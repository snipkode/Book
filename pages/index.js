
import Layout from '../components/Layout'
import SwiperProduct from '../components/Swiper'
import Trending from '../components/Trending'

export default function Home({ books }) {
  return (
    <Layout title="Home | Starlova Publishing">
      <div className="content bg-page">
        <div className="section-content">
          <div className="section">
            <h4>Premium Books</h4>
          </div>
          <SwiperProduct data={books} />
        </div>
        <div className="section-content">
          <div className="section">
            <h4>Trending Books</h4>
          </div>
          <Trending data={books} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/books');
  const data = await response.json();
  return {
    props: { books: data },
  };
}
