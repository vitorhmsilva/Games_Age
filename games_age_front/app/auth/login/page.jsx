'use client'

import Button from "@components/Button"
import Input from "@components/Input"
import styles from "@styles/Login.module.css"
import Image from "next/image"
import Link from "next/link"

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={175}
            height={175}
          />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder='Apelido' showIcon={false} type='text' />
          <Input placeholder='Senha' showIcon={true} type='password' />
        </div>
        <p className={styles.textoCadastrar}>Não tem conta? <b><Link href='/auth/cadastro'> Cadastrar-se</Link></b></p>
        <Button name='Entrar' />
      </div>
    </div>
  )
}

export default Login