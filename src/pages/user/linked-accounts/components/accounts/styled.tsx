import styled, { css, keyframes } from "styled-components";

export const Top = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const MainTitle = styled.h3`
    text-transform: uppercase;
    color: var(--red);
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
`

export const MainAccount = styled.div`
    outline: 1px solid var(--red);
    padding: 20px;
    width: calc(100% - 40px);
    background-color: var(--content-third);
    border-radius: 12px;
    align-items: center;
    display: flex;
    gap: 16px;
`

export const MainImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 8px;
`

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const MainUsername = styled.h4`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    gap: 12px;
    align-items: center;
`

export const MainOnline = styled.div<{ $online: boolean }>`
    border-radius: 4px;
    padding: 4px 8px;
    ${({ $online }) => $online && css`
        outline: 1px solid var(--green);
    `};
    color: ${({ $online }) => $online ? 'var(--green)' : 'oklch(70.8% 0 0)'};
    background-color: ${({ $online }) => $online ? 'rgba(var(--green-rgb), .1)' : 'oklch(37.1% 0 0)'};
    font-size: 12px;
    font-weight: 400;
    display: flex;
    gap: 8px;
    align-items: center;
`

const onlinePinger = keyframes`
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

export const OnlinePinger = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: .5;
    background-color: var(--green);
    animation: 1s infinite ease-in-out ${onlinePinger};
`

export const Register = styled.h5`
    font-size: 12px;
    opacity: .5;
    font-weight: 400;
`

export const Others = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const OthersTitle = styled.h4`
    color: oklch(70.8% 0 0);
    font-size: 16px;
    font-weight: 300;
`

export const OtherAccounts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const OtherAccount = styled.div`
    padding: 12px;
    width: calc(100% - 24px);
    background-color: var(--content-third);
    border-radius: 12px;
    align-items: center;
    display: flex;
    gap: 16px;
`

export const OtherImage = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 6px;
`

export const OtherText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const OtherUsername = styled.h4`
    font-size: 14px;
    font-weight: 600;
    display: flex;
    gap: 12px;
    align-items: center;
`

export const OtherOnline = styled.div<{ $online: boolean }>`
    border-radius: 4px;
    padding: 4px 6px;
    ${({ $online }) => $online && css`
        outline: 1px solid var(--green);
    `};
    color: ${({ $online }) => $online ? 'var(--green)' : 'oklch(70.8% 0 0)'};
    background-color: ${({ $online }) => $online ? 'rgba(var(--green-rgb), .1)' : 'oklch(37.1% 0 0)'};
    font-size: 10px;
    font-weight: 400;
    display: flex;
    gap: 6px;
    align-items: center;
`