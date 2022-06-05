import Head from 'next/head';
import Banner from '../Banner';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Starlova Publishing Platfrom" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <div className="main-bg">
                {children}
            </div>
            <Footer />
        </>
    )
}
