import {WhatsappImage} from '@/assets'
import Image from 'next/image'
import React from 'react'
import {Container} from './styles'

const Whatsapp = () => {
  return (
    <Container href="">
      <Image height={48} src={WhatsappImage} alt="Whatsapp" />
    </Container>
  )
}

export default Whatsapp