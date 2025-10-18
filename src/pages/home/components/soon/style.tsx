import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: calc(1400px - 160px);
    padding: 80px;
    outline: 1px solid transparent;
    transition-duration: 200ms;
    background-color: var(--content);
    border-radius: 12px;
    margin: 120px 0%;
    display: flex;
    justify-content: space-between;
    &:hover {
        outline-color: var(--content-second);
    }
`

export const Status = styled.div`
    width: fit-content;
    padding: 12px 20px;
    border-radius: 9999px;
    outline: 1px solid rgba(var(--red-rgb), .5);
    background-color: rgba(var(--red-rgb), .1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const pingerAnim = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
`

export const Pinger = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--red);
    animation: 1s infinite ${pingerAnim};
`

export const PingText = styled.h6`
    font-size: 16px;
    color: var(--red);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Title = styled.h1`
    font-size: 64px;    
    font-weight: 700;
    & > span { 
        color: var(--red);
    }
`

export const Subtitle = styled.h2`
    font-size: 32px;
    opacity: .5;
    font-weight: 400;
`

export const Image = styled.img`
    width: 50%;
    object-fit: cover;
    height: auto;
`