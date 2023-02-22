import ironLogo from '../images/ironhack-logo-xs.png';
import menuIcon from '../images/menu-top-xs.png';

const Navbar = () => {
  return (
    <nav className="navBar">
      <img src={ironLogo} alt="ironhackLogo" />
      <img id="menuIcon" src={menuIcon} alt="menuIcon" />
    </nav>
  );
};

export default Navbar;