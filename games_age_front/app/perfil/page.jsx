'use client'

import Button from '@components/Button';
import Input from '@components/Input';
import SearchGame from '@components/SearchGame';
import styles from '@styles/Perfil.module.css';
import api from '@utils/api';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {BiTrash} from 'react-icons/bi';

const page = () => {
  const [games, setGames] = useState([]);

  api.get("/jogos")
    .then(response => {
      setGames(response.data);
      console.log(games);
    }).catch(error => {
      console.log(error);
    });

  const banana = () => {
    console.log("banana");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/icons/profile.svg"
            alt="logo"
            width={175}
            height={175}
            className={styles.nav_img}
          />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nomeBody}>Vitor Martins</p>
          <p className={styles.subBody}>xxvitinhopkbxx</p>
          <p className={styles.subBody}>vvitinhopkbxx@gmail.com</p>
          <AiOutlineEdit className={styles.editIcon} onClick={() => banana()} />
          <BiTrash className={styles.removeIcon} />
        </div>
      </div>
      <div className={styles.formsContainer}>
        <div className={styles.inputsContainer}>
          <h1 className={styles.formsTitle}>Mudar Senha</h1>
          <Input placeholder='Senha Antiga' showIcon={true} type='password' />
          <Input placeholder='Senha Nova' showIcon={true} type='password' />
          <Input placeholder='Repetir Senha Nova' showIcon={true} type='password' />
          <Button name='Mudar Senha' />
          
        </div>
        <div className={styles.inputsContainer}>
          <h1 className={styles.formsTitle}>Adicionar Progresso</h1>
          <SearchGame games={games} />
          <Input placeholder='Progresso (em %)' showIcon={false} type='number' />
          <Input placeholder='Conquistas' showIcon={false} type='number' />
          <Button name='Adicionar Progresso' />
        </div>
      </div>
    </div>
  );
};

export default page;
