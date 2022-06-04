import StandImage from './stand.png';
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
            </div>
        </div>
    )
}
