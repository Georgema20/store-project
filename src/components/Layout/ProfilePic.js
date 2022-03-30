import styles from './ProfilePic.module.css';
import profilePic from '../../images/profilePic.png';

const ProfilePic = (props) => {
  return (
    <div className={styles.profile} onClick={props.profileFunc}>
      <img src={profilePic} alt="profile picture" />
    </div>
  );
};

export default ProfilePic;
