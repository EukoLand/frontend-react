import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 32px;
`

export const Tokens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 64px);
    padding: 32px;
    border-radius: 12px;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
`

export const History = styled.div`
    display: flex;
    width: calc(100% - 48px);
    padding: 24px;
    border-radius: 12px;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    flex-direction: column;
    gap: 12px;
`

export const HistoryLabel = styled.h4`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
`

export const Transaction = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    background-color: var(--content-third);
    border-radius: 8px;
    align-items: center;
`

export const TransactionLeft = styled.div`
    display: flex;
    gap: 12px;
`

export const TransactionIcon = styled.div<{ $red: boolean }>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: rgba(var(--${({ $red }) => $red ? 'red' : 'green'}-rgb), .2);
    & > svg {
        fill: var(--${({ $red }) => $red ? 'red' : 'green'});
        stroke: var(--${({ $red }) => $red ? 'red' : 'green'});
    }
`

export const TransactionText = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TransactionLabel = styled.h4`
    font-weight: 400;
    font-size: 16px;
    color: white;
`

export const TransactionDate = styled.h6`
    font-weight: 300;
    font-size: 14px;
    opacity: .5;
`

export const TransactionValue = styled.h4<{ $red: boolean }>`
    font-size: 16px;
    font-weight: 700;
    color: var(--${({ $red }) => $red ? 'red' : 'green' });
`

export const Balance = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const BalanceTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    opacity: .5;
`

export const BalanceValue = styled.h1`
    font-weight: 700;
    font-size: 48px;
    & > span {
        font-size: 24px;
        opacity: .5;
        font-weight: 500;
    }
`