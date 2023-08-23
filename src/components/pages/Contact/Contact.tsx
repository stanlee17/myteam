import styles from './Contact.module.scss';
import Container from '../../common/Container/Container';
import Navbar from '../../layout/Navbar/Navbar';
import ContactForm from './ContactForm';

import Person from '../../../assets/icons/icon-person.svg';
import Cog from '../../../assets/icons/icon-cog.svg';
import Chart from '../../../assets/icons/icon-chart.svg';

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
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
