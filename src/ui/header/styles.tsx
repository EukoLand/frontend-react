import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.header<{ $start: boolean }>`
    width: calc(100% - 32px);
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    transition-duration: 200ms;
    padding: 16px;
    ${( props ) => props.$start !== true ?
    css`border-bottom: 1px solid oklch(26.9% 0 0);\n
        backdrop-filter: blur(24px);
        background-color: rgba(0, 0, 0, .5);` : 
    css`border-bottom: 1px solid var(--background);\n
        backdrop-filter: none;
        background-color: rgba(0, 0, 0, 0);`}
    @media (min-width: 1000px) {
        width: calc(100% - 512px);
        padding: 16px 256px;
    }
`

export const Login = styled.button`
    border-radius: 9999px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--red);
    padding: 8px 24px;
    transition-duration: 300ms;
    display: none;
    cursor: pointer;
    @media (min-width: 700px) {
        display: flex;
    }
    &:hover {
        scale: 105%;
    }
`

export const Buttons = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @media (min-width: 700px) {
        display: flex;
    }
`

export const MenuButton = styled.button<{ $opened: boolean; }>`
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    position: relative;
    @media (min-width: 700px) {
        display: none;
    }
    ${(props) => props.$opened && css`
        & > div:nth-child(1) {
            transform: translateY(-1px);
            rotate: 45deg;
            transform-origin: bottom left;
        }
        & > div:nth-child(2) {
            opacity: 0;
        }
        & > div:nth-child(3) {
            transform: translateY(1px);
            rotate: -45deg;
            transform-origin: top left;
        }
    `}
`

export const MenuButtonLine = styled.div`
    width: 24px;
    height: 2px;
    background-color: white;
    transition-duration: 200ms;
`

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const disappear = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const Menu = styled.div<{ $closing: boolean, $opened: boolean }>`
    position: absolute;
    // Отступы снаружи и padding по 32px
    width: calc(100vw - 32px - 32px);
    top: calc(100% + 10px);
    right: 0px;
    border-radius: 12px;
    border: 1px solid oklch(26.9% 0 0);
    padding: 16px;
    transition-duration: 200ms;
    background-color: var(--content);
    gap: 8px;
    display: ${(props) => props.$opened === true ? 'flex' : 'none'};
    flex-direction: column;
    animation: .2s ease-in-out ${(props) => props.$closing === true ? disappear : appear};
`

export const MenuLink = styled(Link)<{ $primary?: boolean }>`
    width: calc(100% - 32px);
    padding: 12px 16px;
    border-radius: 8px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    ${(props) => props.$primary === true && css`
        color: var(--red);
        background-color: var(--content-second);`
    }
`

export const MenuLogin = styled(Link)`
    width: calc(100% - 36px);
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    background-color: var(--red);
`;

export const MenuLine = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: rgba(255, 255, 255, .1);
`