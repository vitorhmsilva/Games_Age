import styles from '@styles/Input.module.css';
import { AiFillEyeInvisible } from 'react-icons/ai';

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Banana" />
      <AiFillEyeInvisible className={styles.inputContainerIcon} />
    </div>
  );
};

export default Input;
