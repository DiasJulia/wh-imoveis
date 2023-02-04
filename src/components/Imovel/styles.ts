import styled from "styled-components";

import Image from 'next/image';
import Link from "next/link";

type ImageProps = {
    background: string;
}

export const Container = styled(Link)<ImageProps>`
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    min-height: 256px;
    min-width: 350px;

    margin-bottom: 12px;
    margin-right: 12px;
`;

export const Filter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    object-fit: cover;

    background: rgba(250, 250, 250, 0.25);
    width: 100%;
    height: 100%;
    min-height: 256px;
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
        font-size: 24px!important;

        span{
            color: #265795;
            font-weight: 700;
            font-size: 18px;
            display: block;
            margin-bottom: 8px;
        }
    }
`;

export const Picture = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;