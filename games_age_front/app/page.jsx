import Card from '@components/Card';
import styles from '@styles/Home.module.css';

const Home = () => {
  const items = [
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'The Legend of Zelda: Breath of the Wild',
      platform: [4],
      progress: 100,
      achievements: '120/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'God of War Ragnarok',
      platform: [2],
      progress: 70,
      achievements: '82/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'Counter Strike: Global Offensive',
      platform: [1],
      progress: 30,
      achievements: '5/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'Counter Strike: Global Offensive',
      platform: [1],
      progress: 30,
      achievements: '5/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'Counter Strike: Global Offensive',
      platform: [1],
      progress: 30,
      achievements: '5/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'Counter Strike: Global Offensive',
      platform: [1],
      progress: 30,
      achievements: '5/120',
    },
    {
      gameImage:
        'https://cdn.discordapp.com/attachments/717471853786169425/1114743477381640192/sim.jpg',
      gameName: 'Counter Strike: Global Offensive',
      platform: [1],
      progress: 30,
      achievements: '5/120',
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
