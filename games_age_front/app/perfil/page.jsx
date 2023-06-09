import Input from '@components/Input';
import styles from '@styles/Perfil.module.css';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/icons/profile.svg"
            alt="logo"
            width={175}
            height={175}
            className={styles.nav_img}
          />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nomeBody}>Vitor Martins</p>
          <p className={styles.subBody}>xxvitinhopkbxx</p>
          <p className={styles.subBody}>vvitinhopkbxx@gmail.com</p>
        </div>
      </div>
      <div className={styles.formsContainer}>
        <div>
          <p className={styles.title}>Mudar Senha</p>

          <Input />
          <Input />
          <Input />

          <button className={styles.button}>Mudar Senha</button>
        </div>
      </div>
    </div>
  );
};

export default page;
