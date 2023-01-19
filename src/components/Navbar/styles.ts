import { styled } from "@/styles";

export const Nav = styled('nav', {
    backgroundColor: "$primary",
    position: 'fixed',
    width: '100%',
    display: 'flex',
    padding: '2rem max(calc(100vw - 1400px), 1rem)',
    top: 0,
    justifyContent: 'space-between',
});

export const Menu = styled('ul', {
    listStyle: 'none',
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
})