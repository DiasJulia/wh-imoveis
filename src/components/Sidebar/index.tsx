import {Email, Instagram, Whatsapp} from '@/assets'
import Image from 'next/image'
import React from 'react'
import {Container} from './styles'

const Sidebar = () => {
  return (
    <Container>
        <Image height={32} src={Whatsapp} alt="Whatsapp"/>
        <hr />
        <Image height={32} src={Instagram} alt="Instagram"/>
        <hr />
        <Image height={32} src={Email} alt="Email"/>
    </Container>
  )
}

export default Sidebar