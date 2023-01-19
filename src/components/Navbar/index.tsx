import Link from 'next/link'
import React, {useState} from 'react'

import imoveis from '../../data/imoveis.json';
import {Menu, Nav} from './styles';

const Navbar = () => {
    const bairros =  Array.from(new Set(imoveis.map((imovel)=>{ if(!(imovel.bairro in imoveis)) return imovel.bairro})));

    const [open, setOpen] = useState(false);

  return (
    <Nav>
        <Link href="/">Logo</Link>
        <Menu>
            <li>
                <details open={open} onMouseOver={()=>{setOpen(true)}} onMouseOut={()=>{setOpen(false)}}>
                <summary id="summary" ><Link href="/imoveis">Imóveis</Link></summary>
                <ul id="bairros">{bairros.map((bairro) =>{
                return <li key={bairro}>
                        <Link href={`/imoveis?bairro=${encodeURIComponent(bairro || "")}`}>{bairro}</Link>
                        </li>
                })}</ul>
                </details>
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
        </Menu>
    </Nav>
  )
}

export default Navbar