import Link from 'next/link'
import React from 'react'
import {Container, Logo, Navigation} from './styles';

const Footer = () => {
    const bairros = ["Jatiúca", "Cruz das Almas", "Ponta Verde"];
  return (
    <Container>
    <Navigation>
        <ul>
            <li>
                <Link href="/imoveis">Imóveis</Link>
            </li>
            <ul>
            {bairros.map((bairro) => {
                return <li key={bairro}>
                    <Link href={`/imoveis?bairro=${encodeURIComponent(bairro)}`}>{bairro}</Link>
                </li>
                })}
            </ul>
        </ul>
    </Navigation>
    <Logo></Logo>
    <div></div>
    </Container>
  )
}

export default Footer