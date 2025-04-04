import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import CarCard from "../CarCard/CarCard";
import s from "./CarCatalog.module.css";
const CarCatalog = () => {
  const cars = useSelector(selectCars);

  return (
    <ul className={s.CatalogList}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarCatalog;
