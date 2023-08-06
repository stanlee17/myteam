import Container from '../../common/Container/Container';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import Logo from '../../../assets/logo/logo.svg';
import Facebook from '../../../assets/icons/icon-facebook.svg';
import Pinterest from '../../../assets/icons/icon-pinterest.svg';
import Twitter from '../../../assets/icons/icon-twitter.svg';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          {/* FOOTER LINKS: Home & About */}
          <div className={styles.footerLinks}>
            <Link to="/" className={styles.logo}>
              <img src={Logo} alt="myteam-logo" />
            </Link>
            <div className={styles.links}>
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
            </div>
          </div>

          {/* COMPANY ADDRESS: Address, Suburbs, Zip Code & Contact No. */}
          <div className={styles.companyAddress}>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>

          {/* SOCIAL MEDIA: Links & Copyright */}
          <div className={styles.socialMedia}>
            <div className={styles.svgLinks}>
              <Link to="/">
                <img src={Facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img src={Pinterest} alt="pinterest" />
              </Link>
              <Link to="/">
                <img src={Twitter} alt="twitter" />
              </Link>
            </div>
            <p className={styles.copyright}>
              Copyright {getCurrentYear()}. All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
