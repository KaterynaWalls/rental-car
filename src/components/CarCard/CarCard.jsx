import s from "./CarCard.module.css";
import sprite from "../../assets/images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(car.id);

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const location = address?.split(",").slice(-2).join(", ") || "";
  const mileageFormatted = mileage.toLocaleString("en-US");

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(car.id));
  };

  const getHeartClass = () =>
    isFavorite ? `${s.iconHeart} ${s.active}` : s.iconHeart;

  return (
    <li className={s.card}>
      <div className={s.imageWrapper}>
        <img src={img} alt={`${make} ${model}`} className={s.image} />

        <button className={s.favoriteBtn} onClick={handleFavoriteClick}>
          <svg className={getHeartClass()}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
      </div>

      <div className={s.info}>
        <div className={s.titleRow}>
          <h3 className={s.title}>
            {make} <span>{model}</span>, {year}
          </h3>
          <span className={s.price}>{rentalPrice}</span>
        </div>

        <p className={s.meta}>
          {location} | {rentalCompany} | {type}
        </p>

        <p className={s.mileage}>
          {type} · {mileageFormatted} km
        </p>

        <Link to={`/catalog/${car.id}`} className={s.readMore}>
          Read more
        </Link>
      </div>
    </li>
  );
};

export default CarCard;
