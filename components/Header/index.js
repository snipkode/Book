import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles["header-menu"]}>
                <div className="logo">
                    Starlova Publishing
                </div>
                <div className={styles["form-input"]}>
                    <input type="text" placeholder="Cari..." />
                </div>
                <ul>
                    <li>Semua Buku</li>
                    <li>Buku Gratis</li>
                    <li>Panduan</li>
                    <li>Tentang Kami</li>
                    <li>
                        <button type="text" id="login-btn">Masuk</button>
                    </li>
                </ul>

            </div>
        </header>
    )
}
