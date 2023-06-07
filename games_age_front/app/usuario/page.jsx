'use client';

import styles from '@styles/Home.module.css';
import Card from '@components/Card';
import Ranking from '@components/Ranking';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '@utils/api';

const Usuario = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('nickname');
  const [progressos, setProgressos] = useState([]);
  useEffect(() => {
    api.get('/progressos?nickname=' + search)
  });
  
  fetch('http://localhost:8080/progressos?nickname=' + search)
    .then((response) => {
      setProgressos(response.json());
      console.log(response.json());
    });

  return (
    <section className="relative">
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {progressos?.map((progresso, index) => (
            <Card key={index} {...progresso} />
          ))}
        </div>
        <div className={styles.rankContainer}>
          <h1>{progressos}</h1>
          <Ranking />
        </div>
      </div>
    </section>
  )
}

export default Usuario