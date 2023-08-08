import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import LinkButton from '../../common/LinkButton/LinkButton';
import Logo from '../../../assets/logo/logo.svg';
import Hamburger from '../../../assets/icons/icon-hamburger.svg';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        {/* LOGO */}
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="myteam-logo" />
        </Link>

        {/* LINKS: Home & About */}
        <div className={styles.links}>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </div>
      </div>

      <LinkButton to="/contact" className={styles.linkButton}>
        contact us
      </LinkButton>

      <div className={styles.hamburger}>
        <img src={Hamburger} alt="hamburger-icon" />
      </div>
    </div>
  );
};

export default Navbar;
