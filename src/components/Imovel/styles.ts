import styled from "styled-components";

type ImageProps = {
    background: string;
}

export const Container = styled.div<ImageProps>`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background: url(${(props)=> props.background}) no-repeat center;
    background-size: cover;
    min-height: 256px;
`;

export const Filter = styled.div`
    background: rgba(250, 250, 250, 0.25);
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding-top: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div`
    background: rgba(250, 250, 250, 0.8);
    border-radius: 0px 0px 8px 8px;

    padding: 1em;
    h2{
        font-weight: 700;
        font-size: 24px;

        span{
            color: #265795;
            font-weight: 700;
            font-size: 18px;
            display: block;
            margin-bottom: 8px;
        }
    }
`;

export const ImageContainer = styled.div<ImageProps>`
    background: url(${(props)=> props.background}) no-repeat center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
`;