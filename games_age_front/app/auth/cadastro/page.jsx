'use client'

import Button from "@components/Button"
import Input from "@components/Input"
import styles from "@styles/Cadastro.module.css"
import Image from "next/image"
import Link from "next/link"

const Cadastro = () => {
  return (
    <div className={styles.container}>
    <div className={styles.cadastroContainer}>
      <div className={styles.imgContainer}>
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div className={styles.inputContainer}>
        <Input placeholder='Nome' showIcon={false} type='text' />
        <Input placeholder='Sobrenome' showIcon={false} type='text' />
        <Input placeholder='Nickname' showIcon={false} type='text' />
        <Input placeholder='Email' showIcon={false} type='email' />
        <Input placeholder='Senha' showIcon={true} type='password' />
      </div>
      <p className={styles.textoEntrar}>Já tem uma conta? <b><Link href='/auth/login'> Entrar</Link></b></p>
      <Button name='Salvar' />
    </div>
  </div>
  )
}

export default Cadastro