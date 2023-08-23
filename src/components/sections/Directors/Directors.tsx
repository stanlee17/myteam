import { DirectorsData } from '../../data';
import DirectorsItem from './DirectorsItem';
import styles from './Directors.module.scss';
import Container from '../../common/Container/Container';

const Directors = () => {
  return (
    <div className={styles.directors}>
      <Container>
        <h1 className={styles.heading}>Meet the directors</h1>
        <div className={styles.cards}>
          {DirectorsData.map((item, index) => {
            return (
              <DirectorsItem
                id={index}
                name={item.name}
                title={item.title}
                quote={item.quote}
                image={item.image}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Directors;
