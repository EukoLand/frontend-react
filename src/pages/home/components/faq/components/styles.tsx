import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 720px;
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
`

export const Preview = styled.button<{ $open: boolean }>`
    width: 100%;
    height: 90px;
    background-color: var(--content${({ $open }) => $open && '-second'});
    transition-duration: 200ms;
    padding: 0 24px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
    &:hover {
        background-color: var(--content-second);
    }
`

export const EmojiContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(var(--red-rgb), .1);
`

export const Emoji = styled.h1`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
`

export const Header = styled.h2`
    font-size: 20px;
    font-weight: 600;
`

export const Arrow = styled.div<{ $open: boolean }>`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    transition-duration: .5s;
    transition-timing-function: ease-out;
    & > span > svg {
        transition-duration: .5s;
        ${({ $open }) => $open && css`
            rotate: 180deg;
        `}
    }
`

export const Content = styled.div<{ $open: boolean }>`
    width: 100%;
    ${({ $open }) => !$open ? css`
        max-height: 0vh;
    ` : css`
        max-height: 25vh;
    `}
    overflow: hidden;
    box-sizing: border-box;
    transition-duration: 1s;
`

export const Text = styled.div`
    width: calc(100% - 48px);
    padding: 16px 24px 24px 24px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    opacity: .5;
`