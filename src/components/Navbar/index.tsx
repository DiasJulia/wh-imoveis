import Link from "next/link";
import React, { useEffect, useState } from "react";

import imoveis from "../../data/imoveis.json";
import { CloseButton, Line, Logo, Menu, MenuButton, MenuChecker, Nav } from "./styles";

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
      <MenuChecker id="menu" name="menu" type='checkbox'/>
      <MenuButton htmlFor="menu">
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </MenuButton>
      <Menu >
        <CloseButton htmlFor="menu">
          <Line></Line>
          <Line></Line>
        </CloseButton>
        <li>
        <Link href="#imoveis">Imóveis</Link>
          {/* <details
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
          </details> */}
        </li>
        <li>
          <Link href="#sobremim">Sobre mim</Link>
        </li>
        <li>
          <Link href="#depoimentos">Depoimentos</Link>
        </li>
        <li>
          <Link href="#contato">Contato</Link>
        </li>
      </Menu>
    </Nav>
  );
};

export default Navbar;
