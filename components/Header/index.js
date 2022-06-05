import styles from './header.module.css';
import Link from 'next/Link';
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <div className={styles["header-menu"]}>
                <div className={["logo"]}>
                    <Link href="/">Starlova Publishing Platform</Link>
                </div>
                <div className={styles["form-input"]}>
                    <input type="text" placeholder="Cari..." />
                </div>
                <ul>
                    <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Beranda</Link></li>
                    <li className={router.pathname == "/books" ? "active" : ""}><Link href="/books">Semua Buku</Link></li>
                    <li className={router.pathname == "/panduan" ? "active" : ""}><Link href="/panduan">Panduan</Link></li>
                    <li className={router.pathname == "/tentang" ? "active" : ""}><Link href="/tentang">Tentang Kami</Link></li>
                    <li>
                        <button type="text" id="login-btn">Masuk</button>
                    </li>
                </ul>

            </div>
        </header>
    )
}
