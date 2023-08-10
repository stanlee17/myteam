import { Fragment } from 'react';
import Container from '../../common/Container/Container';
import Navbar from '../../layout/Navbar/Navbar';
import Directors from '../../sections/Directors/Directors';
import Ready from '../../sections/Ready/Ready';
import styles from './About.module.scss';

const About = () => {
  return (
    <Fragment>
      <div className={styles.about}>
        <Container>
          <Navbar />
          <div className={styles.wrapper}>
            <h1>About</h1>
            <h4>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </h4>
          </div>
        </Container>
      </div>
      <Directors />
      <Ready />
    </Fragment>
  );
};

export default About;
