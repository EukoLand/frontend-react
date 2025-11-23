import styled from "styled-components"

export const Container = styled.div`
    width: calc(100% - 48px);
    padding: 24px;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    gap: 16px;
`

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 600;
`

export const SessionContainer = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--content-third);
    border-radius: 8px;
`

export const Delete = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    transition-duration: 200ms;
    cursor: pointer;
    & > svg {
        fill: var(--red);
        transition-duration: 200ms;
    }
    &:hover {
        & > svg {
            fill: white;
        }
        background-color: rgba(var(--red-rgb), .5);
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: calc(100% - 40px - 8px);
`

export const Title = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    @media (min-width: 430px) {
        font-size: 16px;
    }
`

export const Data = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

export const Line = styled.div`
    font-size: 10px;
    font-weight: 400;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    & > span {
        opacity: .5;
    }
    @media (min-width: 430px) {
        font-size: 14px;
    }
    @media (min-width: 715px) {
        width: calc(50% - 8px);
    }
`

export const ModalText = styled.p`
    font-size: 14px;
    opacity: .5;
    font-weight: 400;
`

export const ModalButtons = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column-reverse;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const SessionSkeleton = styled.div`
    height: 80px;
    width: 100%;
    border-radius: 8px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
`

export const NoTokensContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 320px;
    background-color: var(--content-third);
    outline: 1px solid var(--content-fourth);
    border-radius: 8px;
`

export const NoTokens = styled.h2`
    font-size: 38px;
    font-weight: 600;
    color: var(--red);
    text-align: center;
`

export const NoTokensUndertitle = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: var(--red);
    opacity: .5;
    text-align: center;
`