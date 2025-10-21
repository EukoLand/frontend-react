import styled, { css } from "styled-components";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const BlockLabel = styled.h6`
    font-size: 14px;
    font-weight: 400;
    opacity: .4;
`

export const Values = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
`

export const ValueContainer = styled.button<{ $chosen: boolean }>`
    height: 84px;
    width: 100%;
    border-radius: 8px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition-duration: 200ms;
    ${({ $chosen }) => $chosen && css`
        outline-width: 0px;
        background-color: var(--red);
    `}
    &:hover {
        outline-color: var(--content-fouth);
    }
    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`

export const Value = styled.h2`
    font-size: 24px;
    font-weight: 700;
`

export const Subvalue = styled.p`
    opacity: .5;
    font-size: 12px;
    font-weight: 300;
`

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const SummaryContainer = styled.div`
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    border-radius: 8px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--content-fourth);
`

export const SummaryBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const SummaryTitle = styled.h5<{ $main?: boolean }>`
    opacity: ${({ $main }) => $main === true ? '.7' : '.5' };
    font-weight: 300;
    font-size:  ${({ $main }) => $main === true ? 18 : 16 }px;
`

export const SummaryValue = styled.h4<{ $main?: boolean }>`
    font-weight: 600;
    font-size:  ${({ $main }) => $main === true ? 18 : 16 }px;
`

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`

export const MethodContainer = styled.button<{ $curr: boolean }>`
    width: 100%;
    outline: 1px solid var(--${({ $curr }) => $curr ? 'red' : 'content-fourth' });
    padding: 16px;
    display: flex;
    border-radius: 12px;
    transition-duration: 200ms;
    justify-content: space-between;
    text-align: left;
    align-items: center; 
`

export const MethodLeft = styled.div`
    height: 44px;
    display: flex;
    gap: 12px;
`

export const MethodIcon = styled.div<{ $color: string }>`
    width: 44px;
    height: 44px;
    background-color: rgba(${({ $color }) => $color }, .1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MethodText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MethodLabel = styled.h3`
    font-size: 16px;
    font-weight: 300;
`

export const MethodSubtitle = styled.h5`
    opacity: .5;
    font-size: 14px;
    font-weight: 300;
`