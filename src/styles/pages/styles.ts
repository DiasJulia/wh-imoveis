import { maceioBg } from "@/assets";

import styled from "styled-components";

export const FirstSection = styled.section`
  background: url(${maceioBg.src}) no-repeat center;
  background-size: cover;
  height: min(800px, 100vh);
  width: 100%;
`;

export const Filter = styled.div`
  background-color: #ffffff55;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em max(calc(100vw - 1400px) / 2, 1rem);

  h1 {
    text-transform: uppercase;
    color: #122738;
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
    color: #265795;
  }
`;

export const WhiteBlock = styled.div`
  background-color: #fafafa;
  border-radius: 8px;
  min-height: 96px;
  min-width: 75%;
  margin-top: -48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SecondSection = styled.section`
  padding: 2em max(calc(100vw - 1400px) / 2, 1rem);
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 48px;
    color: #122738;
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;

  .main {
    grid-area: 1 / 1 / 3 / 2;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ThirdSection = styled.section`
  padding: 2em max(calc(100vw - 1400px) / 2, 1rem);
  width: 100%;
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #265795;
  }
  .carousel {
    display: flex;
  }
`;

export const FourthSection = styled.section`
  h2 {
    font-weight: 700;
    font-size: 48px;
    color: #fff;
  }

  padding: 2em max(calc(100vw - 1400px) / 2, 1rem) 0;
  width: 100%;
  min-height: 300px;
  background-color: #265795;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
