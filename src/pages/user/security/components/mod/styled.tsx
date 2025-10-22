import styled from "styled-components"

export const Container = styled.div`
    padding: 24px;
    width: calc(100% - 48px);
    display: none;
    gap: 16px;
    background-color: var(--content-second);
    border-radius: 8px;
    outline: 1px solid var(--content-third);
    @media (min-width: 600px) {
        display: flex;
    }
`

export const DownloadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 48px;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: rgba(var(--red-rgb), .2);
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 600;
`

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 400;
    opacity: .5;
`

export const Buttons = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column-reverse;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const Warning = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    outline: 2px solid oklch(76.9% 0.188 70.08 / 30%);
    background-color: oklch(76.9% 0.188 70.08 / 10%);
    border-radius: 12px;
    display: flex;
    gap: 12px;
`

export const WarningContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const WarningTitle = styled.h3`
    color: oklch(76.9% 0.188 70.08);
    font-size: 18px;
    font-weight: 500;
`

export const WarningText = styled.ul`
    padding-left: 16px;
    & > li {
        & > b { color: inherit; }
        color: oklch(76.9% 0.188 70.08 / 75%);
        font-size: 16px;
        font-weight: 400;
    }
`

export const Support = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    background-color: var(--content-third);
    border-radius: 12px;
    gap: 12px;
`

export const SupportTitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    opacity: .5;
`

export const SupportElement = styled.div`
    display: flex;
    gap: 12px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    align-items: center;
`