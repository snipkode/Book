import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles["header-menu"]}>
                <div className="logo">
                    Starlova Publishing Platform
                </div>
                <div className={styles["form-input"]}>
                    <input type="text" placeholder="Cari..." />
                </div>
                <ul>
                    <li>Beranda</li>
                    <li>Semua Buku</li>
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
