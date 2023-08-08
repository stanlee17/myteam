import styles from './Testimonials.module.scss';
import Container from '../../common/Container/Container';

// Avatar
import Kady from '../../../assets/avatar/avatar-kady.jpg';
import Aiysha from '../../../assets/avatar/avatar-aiysha.jpg';
import Arthur from '../../../assets/avatar/avatar-arthur.jpg';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <Container>
        <h2 className={styles.heading}>
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </h2>
        <div className={styles.reviews}>
          {/* Kady Baker Review */}
          <div className={styles.review}>
            <p className={styles.quote}>
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <div className={styles.reviewerInfo}>
              <h4>Kady Baker</h4>
              <p className={styles.jobTitle}>Product Manager at Bookmark</p>
            </div>
            <img src={Kady} alt="avatar-kady" />
          </div>

          {/* Aiysha Reese Review */}
          <div className={styles.review}>
            <p className={styles.quote}>
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <div className={styles.reviewerInfo}>
              <h4>Aiysha Reese</h4>
              <p className={styles.jobTitle}>Founder of Manage</p>
            </div>
            <img src={Aiysha} alt="avatar-aiysha" />
          </div>

          {/* Arthur Clarke Review */}
          <div className={styles.review}>
            <p className={styles.quote}>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <div className={styles.reviewerInfo}>
              <h4>Arthur Clarke</h4>
              <p className={styles.jobTitle}>Co-founder of MyPhysio</p>
            </div>
            <img src={Arthur} alt="avatar-arthur" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
