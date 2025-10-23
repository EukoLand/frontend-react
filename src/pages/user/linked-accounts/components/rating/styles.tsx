import styled from "styled-components";

export const Top = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-direction: column;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const WarningContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    align-self: flex-start;
`

export const WarningText = styled.div`
    display: flex;
    flex-direction: column;
`

export const WarningTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    @media (min-width: 600px) {
        font-size: 16px;
    }
`

export const WarningDescription = styled.h6`
    font-size: 12px;
    font-weight: 400;
    opacity: .5;
    @media (min-width: 600px) {
        font-size: 14px;
    }
`

export const Warning = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: oklch(79.5% 0.184 86.047 / 10%);
    min-width: 48px;
    width: 48px;
    height: 48px;
`

export const Level = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 16px;
    line-height: 14px;
    font-weight: 600;
`

export const LevelCircle = styled.div<{ $red: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ $red }) => $red ? 'var(--red)' : 'oklch(37.1% 0 0)'};
`

export const Explanation = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    background-color: oklch(79.5% 0.184 86.047 / 10%);
    color: oklch(85.2% 0.199 91.936);
    border-radius: 8px;
    font-size: 14px;
    & > b { color: inherit; }
    @media (min-width: 600px) {
        font-size: 16px;
    }
`