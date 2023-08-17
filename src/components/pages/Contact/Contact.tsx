import styles from './Contact.module.scss';
import Person from '../../../assets/icons/icon-person.svg';
import Cog from '../../../assets/icons/icon-cog.svg';
import Chart from '../../../assets/icons/icon-chart.svg';
import Container from '../../common/Container/Container';
import Navbar from '../../layout/Navbar/Navbar';
import LinkButton from '../../common/LinkButton/LinkButton';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container>
        <Navbar />
        <div className={styles.wrapper}>
          <div className={styles.textContent}>
            <h1>Contact</h1>
            <h3>Ask us about</h3>
            <div>
              <div className={styles.quality}>
                <img src={Person} alt="icon-person" />
                <div className={styles.content}>
                  <h4>The quality of our talent network</h4>
                </div>
              </div>
              <div className={styles.usage}>
                <img src={Cog} alt="icon-cog" />
                <div className={styles.content}>
                  <h4>Usage & implementation of our software</h4>
                </div>
              </div>
              <div className={styles.innovation}>
                <img src={Chart} alt="icon-chart" />
                <div className={styles.content}>
                  <h4>How we help drive innovation</h4>
                </div>
              </div>
            </div>
          </div>
          <form>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Name"
            />
            <input
              type="email"
              className={styles.formControl}
              placeholder="Email Address"
            />
            <input
              type="text"
              className={styles.formControl}
              placeholder="Company Name"
            />
            <input
              type="text"
              className={styles.formControl}
              placeholder="Title"
            />
            <textarea
              name="message"
              className={styles.formControl}
              cols={20}
              rows={3}
              placeholder="Message"
            />
            <LinkButton className={styles.linkButton} button>
              Submit
            </LinkButton>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
