import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Footer, Navbar} from '@/components'
import React from 'react'

const Contato = () => {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <Navbar/>
      Contato
      <Footer/>
    </main>
    </>
  )
}

export default Contato