'use client';

import styles from '@styles/Card.module.css';
import { GetPlatform } from '@components/GetPlatform';
import { ProgressBar } from './ProgressBar';
import { BiTrophy } from 'react-icons/bi';
import { LuEdit2 } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';

const Card = (props) => {
  const progress = `${props.progress}%`;

  return (
    <div className={styles.card_body}>
      <div className={styles.logoContainer}>
        <div
          styles={{
            backgroundImage: `url(${props.gameImage})`,
          }}
        ></div>
      </div>
      <div className={styles.nameContainer}>{props.gameName}</div>
      <div className={styles.buttonsContainer}>
        <LuEdit2 color="#e8e0e0" size={'32px'} />
        <AiOutlineDelete color="#e8e0e0" size={'32px'} />
      </div>
      <div className={styles.platformsContainer}>
        {props.platform.map((item) => (
          <GetPlatform props={item} />
        ))}
      </div>
      <div className={styles.progressContainer}>
        <h1>Progresso: {progress}</h1>
        <ProgressBar progress={props.progress} />
      </div>
      <div className={styles.achievementsContainer}>
        <h1>Conquistas:</h1>
        <div>
          <p>{props.achievements}</p>
          <BiTrophy color="#e8e0e0" size={'42px'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
