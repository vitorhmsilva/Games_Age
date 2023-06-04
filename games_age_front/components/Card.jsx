'use client';

import styles from '@styles/Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.logoContainer}>{props.gameImage}</div>
      <div className={styles.nameContainer}>{props.gameName}</div>
      <div className={styles.buttonsContainer}>apagar, e tchan</div>
      <div className={styles.plataformsContainer}>{props.name}</div>
      <div className={styles.progressContainer}>{props.progress}</div>
      <div className={styles.achivmentsContainer}>{props.achivments}</div>
    </div>
  );
};

export default Card;
