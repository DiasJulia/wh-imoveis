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
    z-index: 10;
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
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: max(calc(100vw - 1400px)/2, 1rem);
    clip-path: polygon(50% 100%, 100% calc(100% - 50px), 100% 0, 0 0, 0 calc(100% - 50px));
    background-color: #09346B;
    height: calc(100% + 50px);
    width: 128px;
    color: $secondary;
    display: flex;
    justify-content: center;
    align-items: center;
`;