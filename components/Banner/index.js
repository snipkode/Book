import StandImage from './stand.png';
import Book1 from './images/book-1.png';
import Book2 from './images/book-2.png';
import Book3 from './images/book-3.png';
import Image from 'next/Image';

export default function Banner() {
    return (
        <div className="banner">
            <div className="left-menu">
                <div className="heading-banner">
                    <h2>Terbitkan Karya Terbaikmu Sekarang!</h2>
                    <p>Terbitkan Karya Terbaik Kamu Dan Tingkatan Penghasilan Bersama 1000+ Komunitas Publisher Kami Diseluruh Wilayah Indonesia.</p>
                </div>
                <button className="button-banner">Mendaftar Menjadi Penulis</button>
            </div>
            <div className="right-menu">
                <div className="image-stand">
                    <Image src={StandImage} alt="stand" />
                </div>
                <div className="book-display">
                    <Image src={Book1} width={200} height={250} alt="image banner book"/>
                    <Image src={Book2} width={200} height={250} alt="image banner book"/>
                    <Image src={Book3} width={200} height={250} alt="image banner book"/>
                </div>
            </div>
        </div>
    )
}
