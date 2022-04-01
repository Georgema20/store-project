import styles from './ProfilePic.module.css';
import profilePic from '../../images/profilePic.png';

const ProfilePic = () => {
  return (
    <div className={styles.profile}>
      <img src={profilePic} alt="profile picture" />
    </div>
  );
};

export default ProfilePic;
