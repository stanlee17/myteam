import Container from '../../common/Container/Container';
import styles from './Clients.module.scss';

import TheVerge from '../../../assets/logo/logo-the-verge.png';
import TheJakartaPost from '../../../assets/logo/logo-jakarta-post.png';
import TheGuardian from '../../../assets/logo/logo-the-guardian.png';
import TechRadar from '../../../assets/logo/logo-tech-radar.png';
import GadgetsNow from '../../../assets/logo/logo-gadgets-now.png';

const Clients = () => {
  return (
    <div className={styles.clients}>
      <Container>
        <h1 className={styles.heading}>Some of our clients</h1>
        <div className={styles.logos}>
          <img src={TheVerge} alt="logo-the-verge" />
          <img src={TheJakartaPost} alt="logo-jakarta-post" />
          <img src={TheGuardian} alt="logo-the-guardian" />
          <img src={TechRadar} alt="logo-tech-radar" />
          <img src={GadgetsNow} alt="logo-gadgets-now" />
        </div>
      </Container>
    </div>
  );
};

export default Clients;
