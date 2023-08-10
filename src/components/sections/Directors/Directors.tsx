import styles from './Directors.module.scss';
import Container from '../../common/Container/Container';

import Nikita from '../../../assets/avatar/avatar-nikita.jpg';
import Christian from '../../../assets/avatar/avatar-christian.jpg';
import Cruz from '../../../assets/avatar/avatar-cruz.jpg';
import Drake from '../../../assets/avatar/avatar-drake.jpg';
import Griffin from '../../../assets/avatar/avatar-griffin.jpg';
import Aden from '../../../assets/avatar/avatar-aden.jpg';

import Cross from '../../../assets/icons/icon-cross.svg';
// import Close from '../../../assets/icons/icon-close.svg';

const Directors = () => {
  return (
    <div className={styles.directors}>
      <Container>
        <h1 className={styles.heading}>Meet the directors</h1>
        <div className={styles.cards}>
          {/* Nikita Marks */}
          <div className={styles.card}>
            <img src={Nikita} className={styles.avatar} alt="avatar-nikita" />
            <div className={styles.directorInfo}>
              <h4>Nikita Marks</h4>
              <p>Founder & CEO</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
          {/* Christian Duncan */}
          <div className={styles.card}>
            <img
              src={Christian}
              className={styles.avatar}
              alt="avatar-christian"
            />
            <div className={styles.directorInfo}>
              <h4>Christian Duncan</h4>
              <p>Co-founder & COO</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
          {/* Cruz Hammer */}
          <div className={styles.card}>
            <img src={Cruz} className={styles.avatar} alt="avatar-cruz" />
            <div className={styles.directorInfo}>
              <h4>Cruz Hammer</h4>
              <p>Co-founder & CTO</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
          {/* Drake Heaton */}
          <div className={styles.card}>
            <img src={Drake} className={styles.avatar} alt="avatar-drake" />
            <div className={styles.directorInfo}>
              <h4>Drake Heaton</h4>
              <p>Business Development Lead</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
          {/* Griffin Wise */}
          <div className={styles.card}>
            <img src={Griffin} className={styles.avatar} alt="avatar-griffin" />
            <div className={styles.directorInfo}>
              <h4>Griffin Wise</h4>
              <p>Lead Marketing</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
          {/* Aden Allan */}
          <div className={styles.card}>
            <img src={Aden} className={styles.avatar} alt="avatar-aden" />
            <div className={styles.directorInfo}>
              <h4>Aden Allan</h4>
              <p>Head of Talent</p>
            </div>
            {/* More Info Button */}
            <div className={styles.moreInfoBtn}>
              <img src={Cross} className={styles.btn} alt="icon-cross" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Directors;
