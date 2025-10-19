import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: var(--content);
    outline: 1px solid rgba(255, 255, 255, .1);
    transition-duration: 200ms;
    box-sizing: content-box;
    position: relative;
    display: flex;
    flex-direction: column;
    &:hover {
        outline: 1px solid rgba(255, 255, 255, .2);
    }
    @media (min-width: 730px) {
        width: 720px;
    }
`

export const Preview = styled.button<{ $open: boolean }>`
    width: 100%;
    height: 70px;
    background-color: var(--content${({ $open }) => $open && '-second'});
    transition-duration: 200ms;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
    padding: 0 12px;
    &:hover {
        background-color: var(--content-second);
    }
    @media (min-width: 730px) {
        padding: 0 24px;
        height: 90px;
        gap: 16px;
    }
`

export const EmojiContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(var(--red-rgb), .1);
    @media (min-width: 730px) {
        width: 40px;
        height: 40px;
    }
`

export const Emoji = styled.h1`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    @media (min-width: 730px) {
        font-size: 20px;
        line-height: 28px;
    }
`

export const Header = styled.h2`
    font-size: 12px;
    width: calc(100% - 8px - 30px);
    font-weight: 600;
    @media (min-width: 730px) {
        font-size: 20px;
        width: auto;
    }
`

export const Arrow = styled.div<{ $open: boolean }>`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    transition-duration: .5s;
    display: none;
    transition-timing-function: ease-out;
    & > span > svg {
        transition-duration: .5s;
        ${({ $open }) => $open && css`
            rotate: 180deg;
        `}
    }
    @media (min-width: 730px) {
        display: block;
    }
`

export const Content = styled.div<{ $open: boolean }>`
    width: 100%;
    ${({ $open }) => !$open ? css`
        max-height: 0vh;
    ` : css`
        max-height: 40vh;
    `}
    overflow: hidden;
    box-sizing: border-box;
    transition-duration: 1s;
`

export const Text = styled.div`
    width: calc(100% - 40px);
    padding: 12px 20px 20px 20px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    opacity: .5;
    @media (min-width: 730px) {
        font-size: 18px;
        line-height: 26px;
        padding: 16px 24px 24px 24px;
    }
`