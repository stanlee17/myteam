import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import LinkButton from '../../common/LinkButton/LinkButton';
import Container from '../../common/Container/Container';
import Logo from '../../../assets/logo/logo.svg';

const Navbar = () => {
  return (
    <Container>
      <div className={styles.navbar}>
        <div>
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

        <LinkButton to="/contact">contact us</LinkButton>
      </div>
    </Container>
  );
};

export default Navbar;
