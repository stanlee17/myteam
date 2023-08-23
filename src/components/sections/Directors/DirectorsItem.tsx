import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Directors.module.scss';
import Twitter from '../../../assets/icons/icon-twitter.svg';
import LinkedIn from '../../../assets/icons/icon-linkedin.svg';
import Cross from '../../../assets/icons/icon-cross.svg';

interface ItemProps {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const DirectorsItem = ({ id, name, title, quote, image }: ItemProps) => {
  const [card, setCard] = useState<boolean>(false);

  const showCard = () => setCard(!card);

  return (
    <div key={id} className={styles.card}>
      <div className={styles.content}>
        {/* FRONT */}
        <div className={styles.front}>
          <img src={image} className={styles.avatar} alt={name} />
          <div className={styles.directorInfo}>
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={
            card ? `${styles.back} ${styles.active}` : `${styles.back}`
          }
        >
          <div className={styles.backContent}>
            <h4>{name}</h4>
            <p>“{quote}”</p>
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
};

export default DirectorsItem;
