import { NavLink } from 'react-router-dom';
import styles from '../components/user.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
};

const NavbarMenu = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getClassName} to="/tweets">
        Tweets 
      </NavLink>
    </nav>
  );
};

export default NavbarMenu;
