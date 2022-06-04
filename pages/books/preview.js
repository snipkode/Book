import Books from '../../components/Books';
import Header from '../../components/Header';
import Head from 'next/head';
import Footer from '../../components/Footer';

export default function preview() {
  return (
    <>
      <Head>
        <title>Book Preview | Starlova Publishing</title>
        <meta name="description" content="Starlova Publishing Platfrom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="preview">
        <Books />
      </div>
      <Footer />
    </>
  )
}
