import Books from '../../../components/Books';
import Header from '../../../components/Header';
import Head from 'next/head';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';

export default function Preview() {
  const router = useRouter();
  const { bookId } = router.query;
  return (
    <>
      <Head>
        <title>Book Preview {bookId} | Starlova Publishing </title>
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
