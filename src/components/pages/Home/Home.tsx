import { Fragment } from 'react';
import styles from './Home.module.scss';
import Container from '../../common/Container/Container';

// Sections
import WhyUs from '../../sections/WhyUs/WhyUs';
import Testimonials from '../../sections/Testimonials/Testimonials';
import Ready from '../../sections/Ready/Ready';

const Home = () => {
  return (
    <Fragment>
      {/* Hero */}
      <div className={styles.hero}>
        <Container>
          <div className={styles.wrapper}>
            <h1>
              Find the best <span>talent</span>
            </h1>
            <h4>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </h4>
          </div>
        </Container>
      </div>
      <WhyUs />
      <Testimonials />
      <Ready />
    </Fragment>
  );
};

export default Home;
