import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </nav>
  );
};

export default NavbarMenu;
