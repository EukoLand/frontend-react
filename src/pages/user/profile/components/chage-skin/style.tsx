import styled, { css, keyframes } from "styled-components";

export const ImageLoaderContainer = styled.div<{ $preview: boolean }>`
    width: 100%;
    height: 200px;
    position: relative;
    transition-duration: 200ms;
    ${
        ({ $preview }) => !$preview && css`
            &:hover {
                scale: 1.02;
            }
        `
    }
`

export const ImageLoader = styled.input`
    position: absolute;
    z-index: 52;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
`

export const ImageLoaderBg = styled.div`
    outline: 2px dotted rgba(255, 255, 255, .5);
    border-radius: 12px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    font-size: 16px;
    & > span {
        color: rgba(255, 255, 255, .5);
        font-size: 14px;
    }
`

export const Context = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    border-radius: 12px;
    color: rgba(255, 255, 255, .5);
    font-size: 14px;
    font-weight: 400;
    & > b {
        color: var(--red);
        font-weight: 600;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    flex-direction: column-reverse;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Error = styled.div`
    outline: 1px solid oklch(63.7% 0.237 25.331);
    border-radius: 12px;
    padding: 12px;
    width: calc(100% - 24px);
    color: oklch(63.7% 0.237 25.331);
    background-color: oklch(63.7% 0.237 25.331 / 10%);
`

export const CheckPreview = styled.img`
    position: fixed;
    right: 100%;
    bottom: 100%;
`

export const PreviewSkin = styled.img`
    width: 64px;
    height: 64px;
`

export const PreviewData = styled.div`
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: center;
`

export const PreviewName = styled.h5`
    font-size: 16px;
    font-weight: 400;
`

export const PreviewSize = styled.h5`
    font-size: 14px;
    font-weight: 400;
    opacity: .5;
`

const flippx = keyframes`
    0%, 49.9% {
        transform: scaleX(1);
    }
    50%, 100% {
        transform: scaleX(-1);
    }
`

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingSpinner = styled.span`
    height: 50%;
    aspect-ratio: 1.52;
    position: relative;
    animation: ${flippx} 2s infinite linear;
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        margin: auto;
        width: 40%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #FFF;
        transform-origin: -60% 50%;
        animation: ${spin} 1s infinite linear;
    }
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50% , -50%);
        background: #fff;
        width: 90%;
        aspect-ratio: 1;
        border-radius: 50%;
    }
`