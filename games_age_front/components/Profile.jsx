import styles from '@styles/Profile.module.css'
import Image from 'next/image';

const Profile = () => {
  return (
    <div className={styles.profile_body}>
      <Image
        src="/assets/icons/profile.svg"
        alt="logo"
        width={175}
        height={175}
        className={styles.profile_img}
      />
      <div className={styles.nameContainer}>
        <p className={styles.nomeBody}>Vitor Martins</p>
        <p className={styles.nicknameBody}>xxvitinhopkbxx</p>
      </div>
    </div>
  );
};

export default Profile;