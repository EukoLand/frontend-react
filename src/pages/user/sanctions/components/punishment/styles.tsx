import styled, { css } from "styled-components";

export const Container = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    background-color: var(--content-third);
    outline: 1px solid var(--content-fourth);
    border-radius: 8px;
    @media (min-width: 340px) {
        gap: 16px;
        flex-direction: row;
    }
    @media (min-width: 400px) {
        width: calc(100% - 40px);
        padding: 20px;
    }
`

export const Skin = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    user-select: none;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 400px) {
        gap: 12px;
    }
`

export const Bars = styled.div`
    display: flex;
    gap: 12px;
`

export const Bar = styled.div<{ $color: 'gray' | 'yellow' | 'green' | 'red' }>`
    /* Жёлтый */
    --yellow-bg: 70.5% 0.213 47.604 / 10%;
    --yellow-text: 75% 0.183 55.934;
    /* Красный */
    --red-bg: 63.7% 0.237 25.331 / 10%;
    --red-text: 70.4% 0.191 22.216;
    /* Серый */
    --gray-bg: 37.1% 0 0;
    --gray-text: 70.8% 0 0;
    /* Зелёный */
    --green-bg: 72.3% 0.219 149.579 / 10%;
    --green-text: 72.3% 0.219 149.579;

    background-color: oklch(var(--${({ $color }) => $color}-bg));
    /* Для расширяемости */
    ${({ $color }) => ['green'].includes($color) && css`
        outline: 1px solid oklch(var(--${$color}-text));
    `}
    color: oklch(var(--${({ $color }) => $color}-text));
    padding: 2px 4px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 4px;
    @media (min-width: 400px) {
        padding: 4px 8px;
        font-size: 12px;
        font-weight: 700;
    }
`

export const Title = styled.h4`
    font-size: 16px;
    font-weight: 400;
`

export const Sanctions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const SanctionTitle = styled.h6`
    opacity: .3;
    font-size: 12px;
    font-weight: 400;
`

export const SanctionsList = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 4px;
`

export const Sanction = styled.div`
    padding: 4px 6px;
    border-radius: 4px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-second);
    color: rgba(255, 255, 255, .5);
    font-size: 10px;
    font-weight: 400;
    @media (min-width: 400px) {
        font-size: 12px;
        padding: 4px 8px;
    }
`

export const Data = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    background-color: var(--content-second);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Element = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 24px);
    padding: 0 12px;
    align-items: center;
`

export const ElementTitle = styled.h5`
    font-size: 14px;
    font-weight: 300;
    opacity: .3;
    @media (min-width: 400px) {
        font-size: 16px;
    }
`

export const ElementValue = styled.h5`
    font-size: 14px;
    font-weight: 400;
    @media (min-width: 400px) {
        font-size: 16px;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--content-fourth);
`