import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: calc(100% - 48px);
    padding: 24px;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    gap: 16px;
`

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 600;
`

export const Content = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    background-color: var(--content-third);
    outline: 1px solid var(--content-fourth);
    display: flex;
    gap: 16px;
    align-items: center;
    border-radius: 8px;
`

const ping = keyframes`
    0% {
        opacity: .5;
    }
    50% {
        opacity: .1;
    }
    100% {
        opacity: .5;
    }
`

export const StatusCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    animation: 1s infinite ease-in-out ${ping};
`

export const StatusText = styled.h6`
    font-size: 16px;
    font-weight: 500;
    opacity: .5;
`