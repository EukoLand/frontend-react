import styled, { css } from "styled-components"

export const Profile = styled.div`
    width: 100%;
    position: relative;
    height: 72px;
`

export const ProfileLeft = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    color: inherit;
`

export const Username = styled.h3`
    color: inherit;
    font-size: 16px;
    font-weight: 600;
`

export const Role = styled.h4`
    font-size: 14px;
    font-weight: 300;
    color: white;
    opacity: .5;
`

export const ProfileButton = styled.button`
    width: 100%;
    border-radius: 8px;
    transition-duration: 200ms;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    z-index: 51;
    cursor: pointer;
    user-select: none;
    position: absolute;
    text-align: left;
    left: 0;
    top: 0;
    color: white;
    background-color: var(--content);
    &:hover {
        color: var(--red);
        background-color: var(--content-second);
    }
`

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    user-select: none;
    object-fit: cover;
`

export const Arrow = styled.div<{ $open: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    & > span > svg {
        transition-duration: 200ms;
        ${({ $open }) => $open && css`
            transform: rotate(180deg);  
        `}
    }
`
