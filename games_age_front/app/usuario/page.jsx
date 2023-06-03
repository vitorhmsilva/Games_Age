import Card from "@components/Card"
import Ranking from "@components/Ranking"
import styles from '@styles/Usuario.module.css'

const Usuario = () => {
  return (
    <div className={styles.usuario_body}>
      <Card />
      <Ranking />
    </div>
  )
}

export default Usuario