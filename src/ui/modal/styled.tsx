import styled, { css, keyframes } from "styled-components"

const containerAppear = keyframes`
    from {
        opacity: 0;
    }
`

const containerDisappear = keyframes`
    to {
        opacity: 0;
    }
`

export const Container = styled.div<{ $open: boolean, $anim: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(16px);
    ${({ $open, $anim }) => ($open || $anim) ? css`
        display: block;
        animation: 1s ease-in-out ${$anim ? containerDisappear : containerAppear}
    `: css`display: none;`}
`

const contentAppear = keyframes`
    from {
        top: 40%;
    }
`

const contentDisappear = keyframes`
    to {
        top: 40%;
    }
`

export const Content = styled.div<{ $open: boolean, $anim: boolean, $overflow?: string, $contentBox?: boolean }>`
    width: calc(100% - 20px);
    position: fixed;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    z-index: 100;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    background-color: var(--content-second);
    border-radius: 16px;
    max-height: calc(100vh - 20px);
    box-sizing: ${({ $contentBox }) => $contentBox === true ? 'content-box' : 'border-box'};
    overflow-y: ${({ $overflow }) => $overflow !== undefined ? $overflow : 'auto' };
    outline: 1px solid var(--content-third);
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    ${({ $open, $anim }) => ($open || $anim) ? css`
        display: flex;
        animation: 1s ease-in-out ${$anim ? contentDisappear : contentAppear};
    `: css`display: none;`}
    @media (min-width: 640px) {
        width: 560px;
        padding: 24px;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const BgCloser = styled.button`
    position: absolute;
    user-select: none;
    color: transparent;
    width: 100%;
    height: 100%;
    z-index: 51;
`

export const Label = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

export const Blocker = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    opacity: 0;
`