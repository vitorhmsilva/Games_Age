import Card from '@components/Card';
import styles from '@styles/Home.module.css';

const Home = () => {
  const items = [
    {
      gameImage: 'https://i.imgur.com/1QxXQ2H.png',
      gameName: 'The Legend of Zelda: Breath of the Wild',
      platform: ['Nintendo Switch', 'Wii U'],
      progress: '100%',
      achievements: '120/120',
    },
    {
      gameImage: 'https://i.imgur.com/1QxXQ2H.png',
      gameName: 'God of War Ragnarok',
      platform: ['PlayStation 5'],
      progress: '100%',
      achievements: '120/120',
    },
    {
      gameImage: 'https://i.imgur.com/1QxXQ2H.png',
      gameName: 'Counter Strike: Global Offensive',
      platform: ['PC'],
      progress: '100%',
      achievements: '120/120',
    },
  ];

  return (
    <section className="relative">
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <div className="rank-container">Ranks</div>
      </div>
    </section>
  );
};

export default Home;
