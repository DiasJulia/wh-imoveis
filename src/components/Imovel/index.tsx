import {FotoApto1} from '@/assets'
import Link from 'next/link'

import React from 'react'
import Badge from '../Badge'
import {Container, Content, Filter, Picture} from './styles'

type imovelProps = {
    className?: string,
    nome: string,
    preco: number,
    bairro: string,
    tipo: string,
    id: number
}

const Imovel: React.FC<imovelProps> = ({className, nome, preco, bairro, tipo, id}) => {
  return (
      <Container href={`/imoveis/${id}`} className={className} background={FotoApto1.src}>
        <Picture src={FotoApto1} alt="Fotografia do imóvel"/>
          <Filter>
              <Badge fontSize={16}>{tipo}</Badge>
              <Content>
                <h2>
                  <span>{bairro}</span>
                  {nome}
                </h2>
              </Content>
          </Filter>
      </Container>
  )
}

export default Imovel