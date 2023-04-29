import Link from 'next/link'
import React from 'react'
import {Container} from './styles';

const Footer = () => {
    const bairros = ["Jatiúca", "Cruz das Almas", "Ponta Verde"];
  return (
    <Container>
    <nav>
        <ul>
            <li>
                <Link href="/imoveis">Imóveis</Link>
            </li>
            {bairros.map((bairro) => {
                return <li key={bairro}>
                    <Link href={`/imoveis?bairro=${encodeURIComponent(bairro)}`}>{bairro}</Link>
                </li>
                })}
        </ul>
    </nav>
    </Container>
  )
}

export default Footer