import { Fragment } from 'react';
import Container from '../../common/Container/Container';
import BgPattern1 from '../../../assets/background/bg-pattern-home-1.svg';
import BgPattern2 from '../../../assets/background/bg-pattern-home-2.svg';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Fragment>
      <div className={styles.hero}>
        <Container>
          <div className={styles.wrapper}>
            <h1>
              Find the best <span>talent</span>
            </h1>
            <h6>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </h6>
          </div>
        </Container>
      </div>

      <div className={styles.whyus}>
        <Container>
          <div className={styles.wrapper}>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
