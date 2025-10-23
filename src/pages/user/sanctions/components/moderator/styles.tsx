import styled from "styled-components"

export const Container = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    background-color: var(--content-second);
    display: flex;
    gap: 12px;
    border-radius: 8px;
    height: 40px;
`

export const Skin = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    user-select: none;
`

export const Text = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Nickname = styled.h5`
    font-size: 16px;
    font-weight: 400;
`

export const Role = styled.h6`
    font-size: 12px;
    font-weight: 400;
    opacity: .5;
`