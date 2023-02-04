import styled from "styled-components";

export const Container = styled.div`
    background-color: #FAFAFA;
    border-radius: 8px;
    position: fixed;
    top: 50vh;
    right: max(calc(100vw - 1400px)/2, 1rem);
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    hr{
        width: 100%;
    }

    img{
        margin: 5px;
    }
`