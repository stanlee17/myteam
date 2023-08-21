import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import LinkButton from '../../common/LinkButton/LinkButton';
import Logo from '../../../assets/logo/logo.svg';
import Hamburger from '../../../assets/icons/icon-hamburger.svg';
import Close from '../../../assets/icons/icon-close.svg';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    if (sidebar) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }
  }, [sidebar]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        {/* LOGO */}
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="myteam-logo" />
        </Link>

        {/* LINKS: Home & About */}
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            home
          </Link>
          <Link to="/about" className={styles.link}>
            about
          </Link>
        </div>
      </div>

      <LinkButton to="/contact" className={styles.linkButton}>
        contact us
      </LinkButton>

      <div className={styles.hamburger} onClick={showSidebar}>
        <img src={Hamburger} alt="hamburger-icon" />
      </div>

      {/* Offcanvas/Sidebar */}
      <div
        className={
          sidebar ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`
        }
        onClick={showSidebar}
      ></div>
      <nav
        className={
          sidebar ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`
        }
      >
        <div className={styles.menuItems}>
          <div className={styles.sidebarToggle} onClick={showSidebar}>
            <img
              src={Close}
              alt="icon-menu-close"
              className={styles.menuClose}
            />
          </div>

          <div className={styles.menuLinks}>
            <Link to="/" className={styles.menuLink}>
              home
            </Link>
            <Link to="/about" className={styles.menuLink}>
              about
            </Link>
          </div>

          <LinkButton to="/contact" className={styles.menuButton}>
            contact us
          </LinkButton>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
