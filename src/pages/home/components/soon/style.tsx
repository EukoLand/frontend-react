import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 240px;
    padding: 20px;
    outline: 1px solid transparent;
    transition-duration: 200ms;
    background-color: var(--content);
    border-radius: 12px;
    margin: 40px 0%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    &:hover {
        outline-color: var(--content-second);
    }
    @media (min-width: 600px) {
        width: calc(100% - 60px);
        flex-direction: row;
        margin: 120px 0%;
        padding: 40px 20px;
    }
    @media (min-width: 800px) {
        width: calc(100% - 140px);
        padding: 60px;
    }
    @media (min-width: 1500px) {
        width: calc(1400px - 160px);
        flex-direction: row;
        margin: 120px 0%;
        padding: 80px;
    }
`

export const Status = styled.div`
    width: fit-content;
    padding: 6px 10px;
    border-radius: 9999px;
    outline: 1px solid rgba(var(--red-rgb), .5);
    background-color: rgba(var(--red-rgb), .1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @media (min-width: 800px) {
        padding: 12px 20px;
    }
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
    font-size: 12px;
    color: var(--red);
    @media (min-width: 800px) {
        font-size: 16px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 800px) {
        gap: 40px;
    }
    @media (min-width: 1000px) {
        gap: 80px;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media (min-width: 1500px) {
        gap: 8px;
    }
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 28px;    
    font-weight: 700;
    & > span { 
        color: var(--red);
    }
    @media (min-width: 800px) {
        font-size: 42px; 
        text-align: left;
        width: fit-content;
    }
    @media (min-width: 1500px) {
        font-size: 64px; 
    }
`

export const Subtitle = styled.h2`
    font-size: 16px;
    opacity: .5;
    font-weight: 400;
    @media (min-width: 800px) {
        font-size: 24px;
    }
    @media (min-width: 1500px) {
        font-size: 32px;
    }
`

export const Image = styled.img`
    object-fit: contain;
    display: none;
    user-select: none;
    @media (min-width: 600px) {
        width: 50%;
        display: block;
    }
`