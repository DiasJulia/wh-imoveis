import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Badge, Imovel, ContactForm } from "@/components";

import {
  FifthSection,
  Filter,
  FirstSection,
  FourthSection,
  GridLayout,
  SecondSection,
  ThirdSection,
  WhiteBlock,
} from "@/styles/pages/styles";
import Image from "next/image";
import { Henrique1 } from "@/assets";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>WH Imóveis | Imóveis em Maceió</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FirstSection>
          <Filter>
            <div>
              <h1>
                Transforme seus sonhos em realidade com nossos imóveis em maceió
              </h1>
              <br />
              <h2>Agende sua visita agora!</h2>
            </div>
          </Filter>
        </FirstSection>
        <WhiteBlock />
        <SecondSection>
          <h2>
            <Badge>Confira</Badge>
            Destaques
          </h2>
          <GridLayout>
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
              className="main"
            ></Imovel>
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
            ></Imovel>
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
            ></Imovel>
          </GridLayout>
        </SecondSection>
        <ThirdSection id="imoveis">
          <h2 className="title">
            Tenho certeza de que encontrará o imóvel dos seus sonhos. <br /> Não perca
            mais tempo e entre em contato agora.
          </h2>
          <br />
          <div className="carousel">
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
              className="main"
            ></Imovel>
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
            ></Imovel>
            <Imovel
              id={1}
              nome="Apartamento"
              preco={410000}
              bairro="Jatiúca"
              tipo="Lançamento"
            ></Imovel>
          </div>
          <Link href="/imoveis">Veja mais</Link>
        </ThirdSection>
        <FourthSection id="sobremim">
          <div>
            <h2>
              <Badge>Saiba</Badge>
              Quem sou eu
            </h2>
            <p>
              Atuo como Assessor de Investimentos Imobiliários há 5 anos,
              especialista em compra, venda e investimentos em imóveis.
            </p>
            <button>Encontre seu lar ideal</button>
          </div>
          <Image height={500} src={Henrique1} alt="Foto do Henrique" />
        </FourthSection>
        <FifthSection id="contato">
          <Image height={500} src={Henrique1} alt="Foto do Henrique" />
          <ContactForm></ContactForm>
        </FifthSection>
      </main>
    </>
  );
}
