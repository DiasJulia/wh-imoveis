import styled from "styled-components";

export const Container = styled.div`
  background-color: #09346b;
  width: 100%;
  padding: 2em max(calc(100vw - 1100px) / 2, 1rem);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  color: #fff;
  ul {
    list-style-type: none;
  }

  ul ul {
    margin-left: 10px;
    color: #d9d9d9;
  }
`;

export const Logo = styled.div`
  border-radius: 50%;
  background-color: #fff;
  width: 100px;
  height: 100px;
`;
