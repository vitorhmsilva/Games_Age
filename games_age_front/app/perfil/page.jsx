import styles from '@styles/Perfil.module.css'
import Image from 'next/image'

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
        <div className={styles.mudarSenhaContainer}>
          <input type='password' name='senhaAntiga' />
          <input type='password' name='senhaNova' />
          <input type='password' name='repetirSenhaNova' />
        </div>
        <div className={styles.adcProgressoContainer}>
          <input type='password' name='senhaAntiga' />
          <input type='password' name='senhaNova' />
          <input type='password' name='repetirSenhaNova' />
        </div>
        <div className={styles.deletarUsuarioContainer}>
          <input type='password' name='senhaAntiga' />
          <input type='password' name='senhaNova' />
          <input type='password' name='repetirSenhaNova' />
        </div>
      </div>
    </div>
  )
}

export default page