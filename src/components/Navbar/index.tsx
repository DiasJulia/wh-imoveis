import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link href="/">Logo</Link>
        <ul>
            <li>
                <Link href="/imoveis">Imóveis</Link>
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