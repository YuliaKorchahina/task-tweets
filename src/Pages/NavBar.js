import { NavLink } from 'react-router-dom';

import styles from '../components/user.module.css';
const NavbarMenu = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.btn} to="/">
        Home
      </NavLink>
      <NavLink className={styles.btn} to="/tweets">
        Tweets 
      </NavLink>
    </nav>
  );
};

export default NavbarMenu;
