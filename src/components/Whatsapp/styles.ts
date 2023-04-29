import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  position: fixed;
  right: max(calc(100vw - 1100px) / 2, 1rem);
  bottom: max(calc(100vw - 1100px) / 2, 1rem);
  background-color: #25d366;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
