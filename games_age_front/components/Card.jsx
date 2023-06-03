'use client';

import styles from '@styles/Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card_body}>
      <div clasName={styles.logoContainer}>{props.gameImage}</div>
      <div clasName={styles.nameContainer}>{props.gameName}</div>
      <div clasName={styles.buttonsContainer}>apagar, e tchan</div>
      <div clasName={styles.plataformsContainer}>{props.name}</div>
      <div clasName={styles.progressContainer}>{props.progress}</div>
      <div clasName={styles.achivmentsContainer}>{props.achivments}</div>
    </div>
  );
};

export default Card;
