import Link from "next/link";
import React, { useEffect, useState } from "react";

import imoveis from "../../data/imoveis.json";
import { Logo, Menu, Nav } from "./styles";

const Navbar = () => {
  const bairros = Array.from(
    new Set(
      imoveis.map((imovel) => {
        if (!(imovel.bairro in imoveis)) return imovel.bairro;
      })
    )
  );

  const [open, setOpen] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    });

  return (
    <Nav scroll={scrollTop} >
      <Link href="/">
        <Logo>
            W
        </Logo>
      </Link>
      <Menu>
        <li>
          <details
            open={open}
            onMouseOver={() => {
              setOpen(true);
            }}
          >
            <summary id="summary">
              <Link href="/imoveis">Imóveis</Link>
            </summary>
            <ul
              id="bairros"
              onMouseOver={() => {
                setOpen(true);
              }}
              onMouseOut={() => {
                setOpen(false);
              }}
            >
              {bairros.map((bairro) => {
                return (
                  <li key={bairro}>
                    <Link
                      href={`/imoveis?bairro=${encodeURIComponent(
                        bairro || ""
                      )}`}
                    >
                      {bairro}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
  );
};

export default Navbar;
