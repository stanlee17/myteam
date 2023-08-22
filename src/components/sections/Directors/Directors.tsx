import { useState } from 'react';
import styles from './Directors.module.scss';
import { DirectorsData } from '../../data';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';

import Nikita from '../../../assets/avatar/avatar-nikita.jpg';
import Christian from '../../../assets/avatar/avatar-christian.jpg';
import Cruz from '../../../assets/avatar/avatar-cruz.jpg';
import Drake from '../../../assets/avatar/avatar-drake.jpg';
import Griffin from '../../../assets/avatar/avatar-griffin.jpg';
import Aden from '../../../assets/avatar/avatar-aden.jpg';

import Twitter from '../../../assets/icons/icon-twitter.svg';
import LinkedIn from '../../../assets/icons/icon-linkedin.svg';

import Cross from '../../../assets/icons/icon-cross.svg';
import Close from '../../../assets/icons/icon-close.svg';

const Directors = () => {
  const [card, setCard] = useState<boolean>(false);

  const showCard = () => setCard(!card);

  return (
    <div className={styles.directors}>
      <Container>
        <h1 className={styles.heading}>Meet the directors</h1>

        <div className={styles.cards}>
          {DirectorsData.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  {/* FRONT */}
                  <div className={styles.front}>
                    <img
                      src={item.image}
                      className={styles.avatar}
                      alt={item.name}
                    />
                    <div className={styles.directorInfo}>
                      <h4>{item.name}</h4>
                      <p>{item.jobTitle}</p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className={
                      card
                        ? `${styles.back} ${styles.active}`
                        : `${styles.back}`
                    }
                  >
                    <div className={styles.backContent}>
                      <h4>{item.name}</h4>
                      <p>“{item.quote}”</p>
                      <div className={styles.socialMedia}>
                        <Link to="#">
                          <img src={Twitter} alt="icon-twitter" />
                        </Link>
                        <Link to="#">
                          <img src={LinkedIn} alt="icon-linkedin" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* More Info Button */}
                  <div
                    className={
                      card
                        ? `${styles.moreInfoBtn} ${styles.active}`
                        : `${styles.moreInfoBtn}`
                    }
                    onClick={showCard}
                  >
                    <img src={Cross} className={styles.btn} alt="icon-cross" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Directors;
