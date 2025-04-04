import { Link, NavLink } from "react-router-dom";
import sprite from "../../assets/images/sprite.svg";
import s from "./Header.module.css";

const getActiveClass = ({ isActive }) =>
  isActive ? `${s.link} ${s.active}` : s.link;
const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/">
        <svg className={s.iconLogo}>
          <use xlinkHref={`${sprite}#icon-Logologo-1`} />
        </svg>
      </Link>

      <nav className={s.navContainer}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to="/" className={getActiveClass}>
              Home
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/catalog" className={getActiveClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
