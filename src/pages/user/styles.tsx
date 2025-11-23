import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
    from {
        opacity: 0;
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    background-color: var(--background);
    animation: 1s ease-in-out ${appear};
`

export const Sidebar = styled.nav<{ $open: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--content);
    border-right: 1px solid var(--content-second);
    gap: 44px;
    width: 200px;
    min-height: calc(100vh - 160px);
    padding: 80px 20px;
    position: absolute;
    top: 0;
    left: ${({ $open }) => $open ? '0' : '-500px'};
    transition-duration: 200ms;
    z-index: 25;
    @media (min-width: 1024px) {
        position: static;
    }
`

export const OutletContainer = styled.div`
    width: 100%;
    padding-top: 48px;
    padding-bottom: 8px;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
        width: calc(100vw - 200px);
    }
    @media (min-width: 640px) {
        padding-top: 80px;
    }
`

export const OutletContent = styled.div`
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 600px) {
        width: calc(100% - 80px);
        gap: 32px;
    }
    @media (min-width: 1024px) {
        width: calc(100% - 40px);
    }
    @media (min-width: 1300px) {
        width: 1024px;
    }
`

export const OutletHeader = styled.h1`
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    @media (min-width: 600px) {
        font-weight: 700;
        font-size: 32px;
        width: fit-content;
        text-align: left;
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    z-index: 2;
    position: relative;
`

export const SideLink = styled(Link)`
    width: calc(100% - 32px);
    padding: 0 16px;
    height: 42px;
    display: flex;
    gap: 12px;
    align-items: center;
    transition-duration: 200ms;
    & > svg {
        fill: rgba(255, 255, 255, .7);
        transition-duration: 200ms;
    }
    color: rgba(255, 255, 255, .7);
    border-radius: 8px;
    &:hover {
        color: var(--red);
        & > svg {
            fill: var(--red);
        }
    }
`

export const MenuButton = styled.button<{ $opened: boolean }>`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 26;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    @media (min-width: 1024px) {
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

export const CurrentLink = styled.div<{ $index: number }>`
    background-color: var(--content-third);
    border-radius: 8px;
    opacity: .5;
    position: absolute;
    transition-duration: 200ms;
    width: 100%;
    height: 42px;
    top: ${({ $index }) => `${$index*46}px` };
    z-index: -1;
    left: 0;
`