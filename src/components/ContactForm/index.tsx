import Link from 'next/link'
import React from 'react'
import {Container, FlexDiv, Form, Input, InputContainer, TextField} from './styles';

const ContactForm = () => {
  return (
    <Form>
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
      </Form>
  )
}

export default ContactForm