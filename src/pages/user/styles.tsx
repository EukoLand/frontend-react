import styled, { keyframes } from "styled-components";

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
