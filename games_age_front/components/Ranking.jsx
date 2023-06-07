import styles from '@styles/Ranking.module.css'
import CardRanking from './CardRanking';

const Ranking = () => {
  const users = [
    {
      userImage: '',
      userName: "xxvitinhopkbxx",
      conquistas: 200,
    },
    {
      userImage: '',
      userName: "jpalves",
      conquistas: 157,
    },
    {
      userImage: '',
      userName: "pimentinha",
      conquistas: 182,
    },
  ];

  users.sort((a, b) => b.conquistas - a.conquistas);

  return (
    <div className={styles.ranking_body}>
      <h1 className={styles.ranking_title}>Ranking</h1>
      <div className={styles.users_container}>
        {users.map((item, index) => (
          <CardRanking key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Ranking