'use client';

import styles from '@styles/Usuario.module.css';
import Card from '@components/Card';
import Profile from '@components/Profile';

const Usuario = ({ nickname }) => {
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

  /*useEffect(() => {
    api.get('/progressos', {params: {nickname: 'xxvitinhopkbxx'}})
    .then((response) => {
      console.log(response.data);
    });
  });*/

  return (
    <section className="relative">
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {items?.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <div className={styles.profileContainer}>
          <Profile />
        </div>
      </div>
    </section>
  )
}

export default Usuario