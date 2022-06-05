import styles from './trending.module.css';
import Card from '../Books/card';
import ImageDefault from "../../components/Swiper/images/default.png";

export default function Trending(props) {

  return (
    <div className={styles["grid-container"]}>
      {
        props.data.map((val, key) => {
          const { title, author, thumb, bookId } = val;
          return (
            <Card
              key={key}
              className="grid-item"
              title={title}
              author={author}
              thumb={thumb ? `images/${thumb}` : ImageDefault}
              path={`/books/preview/${bookId}`}
            />
          );
        })
      }

    </div>
  )
}
