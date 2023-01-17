import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const bairros = ["Jatiúca", "Cruz das Almas", "Ponta Verde"];
  return (
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
  )
}

export default Footer