import { Fragment } from 'react';
import Container from '../../common/Container/Container';
import styles from './Home.module.scss';

// Icons
import Person from '../../../assets/icons/icon-person.svg';
import Cog from '../../../assets/icons/icon-cog.svg';
import Chart from '../../../assets/icons/icon-chart.svg';

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

      {/* Why Choose Us */}
      <div className={styles.whyus}>
        <Container>
          <div className={styles.wrapper}>
            <h2>Build & manage distributed teams like no one else.</h2>
            <div className={styles.reason}>
              <div className={styles.experienced}>
                <img src={Person} alt="icon-person" />
                <div className={styles.content}>
                  <h4>Experienced Individuals</h4>
                  <p>
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>

              <div className={styles.implement}>
                <img src={Cog} alt="icon-cog" />
                <div className={styles.content}>
                  <h4>Easy to Implement</h4>
                  <p>
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>

              <div className={styles.productivity}>
                <img src={Chart} alt="icon-chart" />
                <div className={styles.content}>
                  <h4>Enhanced Productivity</h4>
                  <p>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
