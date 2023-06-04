import styles from '@styles/Progress.module.css';

export const ProgressBar = (props) => {
  console.log(props.progress);
  return (
    <header className={styles.experienceBar}>
      <span>0 %</span>
      <div>
        <div
          className={styles.experienceBar}
          style={{ width: `${props.progress}%` }}
        />
      </div>
      <span>{100} %</span>
    </header>
  );
};
