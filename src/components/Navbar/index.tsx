import Link from 'next/link'
import React from 'react'

import imoveis from '../../data/imoveis.json';

const Navbar = () => {
    const bairros =  Array.from(new Set(imoveis.map((imovel)=>{ if(!(imovel.bairro in imoveis)) return imovel.bairro})));
  return (
    <nav>
        <Link href="/">Logo</Link>
        <ul>
            <li>
                <Link href="/imoveis">Imóveis</Link>
                <ul>{bairros.map((bairro) =>{
                return <li key={bairro}>
                        <Link href={`/${encodeURIComponent(bairro || "")}`}>{bairro}</Link>
                        </li>
                })}</ul>
            </li>
            <li>
                <Link href="/">Sobre mim</Link>
            </li>
            <li>
                <Link href="/">Depoimentos</Link>
            </li>
            <li>
                <Link href="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar