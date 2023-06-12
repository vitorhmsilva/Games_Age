'use client'
import styles from '@styles/Input.module.css'
import api from '@utils/api';
import { useEffect, useState } from 'react'

const SearchGame = ({ games }) => {

    return (
        <select  className={styles.inputContainer} data-te-select-init data-te-select-filter="true">
            {games.map((game) => (
                <option key={game.idJogo}>{game.nome}</option>
            ))}
        </select>
    )
}

export default SearchGame