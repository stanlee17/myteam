import styles from './Ready.module.scss';
import LinkButton from '../../common/LinkButton/LinkButton';
import Container from '../../common/Container/Container';

const Ready = () => {
  return (
    <div className={styles.ready}>
      <Container>
        <div className={styles.wrapper}>
          <h2>Ready to get started?</h2>
          <LinkButton to="/contact" className={styles.linkButton}>
            contact us
          </LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default Ready;
