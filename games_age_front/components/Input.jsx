import styles from '@styles/Input.module.css';
import { AiFillEyeInvisible } from 'react-icons/ai';

const Input = ({ placeholder, showIcon, type }) => {
  return (
    <div className={styles.inputContainer}>
      <input type={type} placeholder={placeholder} />
      {showIcon ? (
        <AiFillEyeInvisible className={styles.inputContainerIcon} />
      ) : (
        <></>
      )
      }
    </div>
  );
};

export default Input;
