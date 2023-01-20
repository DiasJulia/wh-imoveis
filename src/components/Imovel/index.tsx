import {FotoApto1} from '@/assets'
import React from 'react'
import Badge from '../Badge'
import {Container, Content, Filter, ImageContainer} from './styles'

type imovelProps = {
    className?: string
}

const Imovel: React.FC<imovelProps> = ({className}) => {
  return (
    <Container className={className} background={FotoApto1.src}>
        <Filter>
            <Badge fontSize={16}>Lançamento</Badge>
            <Content>
              <h2>
                <span>Jatiúca</span>
                Apartamento
              </h2>
            </Content>
        </Filter>
    </Container>
  )
}

export default Imovel