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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
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
