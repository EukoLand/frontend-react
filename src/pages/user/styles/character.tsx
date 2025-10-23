import { Link } from "react-router-dom"
import styled, { css, keyframes } from "styled-components"

const appear = keyframes`
    from {
        top: 0px;
        opacity: 0;
    }
`

const disappear = keyframes`
    to {
        top: 0px;
        opacity: 0;
    }
`

export const CharactersList = styled.div<{ $open?: boolean, $anim: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 84px;
    left: 0;
    border-radius: 12px;
    z-index: 50;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    height: 50vh;
    box-sizing: border-box;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    ${({ $open, $anim }) => $open !== undefined ? css`
        display: ${$open || $anim ? 'block' : 'none'};
        animation: .5s ease-in-out ${$open ? appear : disappear};
    `: css`
        display: none;
    `}
    @media (min-width: 600px) {
        height: auto;
    }
`

export const Character = styled.div`
    width: calc(100% - 24px);
    height: 40px;
    display: flex;
    padding: 12px;
    gap: 12px;
    align-items: center;
    transition-duration: 200ms;
    cursor: pointer;
    &:first-child {
        border-radius: 12px 12px 0 0;
    }
    &:hover {
        background-color: var(--content-third);
    }
`

export const CharacterText = styled.div`
    display: flex;
    flex-direction: column;
`

export const CharacterName = styled.h4`
    font-size: 14px;
    font-weight: 400;
`

export const CharacterType = styled.h5`
    font-size: 12px;
    opacity: .5;
    font-weight: 400;
`

export const CharacterAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    user-select: none;
`

export const LinkedAccounts = styled(Link)`
    width: calc(100% - 24px);
    padding: 16px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 12px 12px;
    border-top: 1px solid rgba(255, 255, 255, .1);
    transition-duration: 200ms;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, .5);
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: var(--content-third);
    }
`