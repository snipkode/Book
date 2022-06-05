import Image from 'next/Image';
import Link from 'next/Link';

export default function Card({ title, author, thumb, path }) {
    return (
        <Link href={path}>
            <div className="product-card">
                <Image className="image-rounded" alt={title} src={thumb} layout="intrinsic" objectFit="cover" width={300} height={410} />
                <div className="info">
                    <div className="title-book">{title}</div>
                    <div className="author-book">
                        <small>{author}</small>
                    </div>
                </div>
            </div>
        </Link>
    )
}
