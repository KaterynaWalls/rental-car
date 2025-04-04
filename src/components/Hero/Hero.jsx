import { Link } from "react-router-dom";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.overlay}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className={s.button}>
          View Catalog
        </Link>
      </div>
    </div>
  );
};

export default Hero;
