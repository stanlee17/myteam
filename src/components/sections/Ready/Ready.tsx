import styles from './Ready.module.scss';
import Container from '../../common/Container/Container';
import LinkButton from '../../common/LinkButton/LinkButton';

const Ready = () => {
  return (
    <div className={styles.ready}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>Ready to get started?</h2>
          <LinkButton to="/contact" className={styles.linkButton}>
            contact us
          </LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default Ready;
