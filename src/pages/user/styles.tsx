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
    display: flex;
    background-color: var(--background);
    animation: 1s ease-in-out ${appear};
`

export const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--content);
    border-right: 1px solid var(--content-second);
    gap: 4px;
    width: 200px;
    height: calc(100% - 160px);
    min-height: calc(100vh - 160px);
    padding: 80px 20px;
`

export const OutletContainer = styled.div`
    width: calc(100vw - 200px);
    padding-top: 80px;
    display: flex;
    justify-content: center;
`

export const OutletContent = styled.div`
    width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const OutletHeader = styled.h1`
    font-size: 32px;
    font-weight: 700;
`

export const SideLink = styled(Link)`
    width: calc(100% - 32px);
    padding: 10px 16px;
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