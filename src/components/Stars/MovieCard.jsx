import { Stars } from './Stars';

export function MovieCard({ movie }) {
  const { title, genre, price, img, rating } = movie;
  return (
    <div className="movie-card">
      <div className="movie-card_cover">
        <div className="image_wrapper">
          <img
            className="movie-card_cover_img"
            src={img}
            alt={`Обложка фильма ${title}`}
          />
        </div>
        <div className="movie-card_genre">{genre}</div>
      </div>

      <div className="movie-card_info">
        <h3 className="movie-card_title">{title}</h3>
        <Stars count={rating} />
        <div className="movie-card_btns">
          <button className="movie-card_btn movie-card_buy-btn" type="button">
            Купить {price}₽
          </button>
          <button
            className="movie-card_btn movie-card_details-btn"
            type="button"
          >
            Подробнее →
          </button>
        </div>
      </div>
    </div>
  );
}
