import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Footer, Navbar} from '@/components'
import React from 'react'
import {ContactForm, Container, FlexDiv, Input, InputContainer, TextField} from '@/styles/pages/contato'

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
      <Container>
      <ContactForm>
        <h1>Entre em contato comigo</h1>
        <p>Algum texto</p>
        <FlexDiv flexDirection='column'>
        <InputContainer>
            <label htmlFor="name">Nome</label>
            <Input placeholder="Seu nome" type='text' name="name" id="name" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="sender">Email</label>
            <Input placeholder="exemplo@email.com" type="email" name="sender" id="sender" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">Mensagem</label>
            <TextField name="message" id="message" cols={30} rows={10}></TextField>
          </InputContainer>
          <button type="submit">Enviar</button>
        </FlexDiv>
      </ContactForm>
      </Container>
    </main>
    </>
  )
}



export default Contato