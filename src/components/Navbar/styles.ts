import styled from "styled-components";

type navProps = {
    scroll: number
}

export const Nav = styled.nav<navProps>`
    background-color: ${(props)=> props.scroll<=10 ? 'rgba(255, 255, 255, 0.7)' : '#fff'};
    color: #09346B;
    position: fixed;
    width: 100%;
    display: flex;
    padding: 2rem max(calc(100vw - 1400px)/2, 1rem);
    top: 0;
    justify-content: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);
    z-index: 11;

    @media(max-width: 768px){
        justify-content: right;
        padding: 1rem;
    }
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    width: 50%;
    align-self: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color:#303030;

    details>summary:first-of-type{
        list-style: none;
    };

    details > ul{
        list-style: none;
        position: absolute;
        margin-top: 10px;
        background: rgba(233, 233, 233, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: #09346B;
        padding: 10px;
    };

    li:hover {
        color: #09346B;
    }

    @media(max-width: 768px){
        position: fixed;
        z-index: 8;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: none;
        padding: 1em;
        text-align: right;

        details > ul{
        position: relative;
        background: transparent;
        box-shadow: none;
        margin-top: 0;
        };
    }
`;

export const MenuChecker = styled.input`
    &:checked + label{
        background-color: black;
    }
    &:checked ~ ${Menu}{
        display: block;
        width: 100%;
        background: #fff;
    }

    visibility: hidden;
`;

export const MenuButton = styled.label`
    display: none;
    @media(max-width: 768px){
        display: inline;
    }
    cursor: pointer;
`;

export const Line = styled.div`
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background-color: #09346B;
    margin: 4px;
`;

export const CloseButton = styled.label`
    display: none;
    visibility: hidden;
    margin-bottom: 3em;

    cursor: pointer;

    @media(max-width: 768px){
        display: inline-flex;
        visibility: visible;
        justify-content: center;
        align-items: center;
    }

    div:first-of-type{
        transform: rotate(45deg);
        position: absolute;
    }

    div:nth-of-type(2){
        transform: rotate(-45deg);
    }
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    z-index: 12;
    left: max(calc(100vw - 1400px)/2, 1rem);
    clip-path: polygon(50% 100%, 100% calc(100% - 50px), 100% 0, 0 0, 0 calc(100% - 50px));
    background-color: #09346B;
    height: calc(100% + 50px);
    width: 128px;
    color: $secondary;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        width:64px;
        clip-path: polygon(50% 100%, 100% calc(100% - 25px), 100% 0, 0 0, 0 calc(100% - 25px));
        height: calc(100% + 25px);
    }
`;