import styles from '@styles/CardRanking.module.css'
import Image from 'next/image'
import { BiTrophy } from 'react-icons/bi'

const CardRanking = (props) => {
    return (
        <div className={styles.cardRanking_body}>
            <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className={styles.card_img}
            />
            <div className={styles.nameContainer}>{props.userName}</div>
            <div>
                <BiTrophy color="#e8e0e0" size={'42px'} />
                <p className={styles.conquistas_numero}>{props.conquistas}</p>
            </div>
        </div>
    )
}

export default CardRanking