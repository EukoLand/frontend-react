import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    border-radius: 8px;
`

export const Header = styled.div<{ $color: "red" | "yellow" }>`
    --red: 63.7% 0.237 25.331;
    --yellow: 70.5% 0.213 47.604;
    --red-text: 70.4% 0.191 22.216;
    --yellow-text: 75% 0.183 55.934;
    background-color: oklch(var(--${({ $color }) => $color }) / 10%);
    border-bottom: 1px solid oklch(var(--${({ $color }) => $color }) / 30%);
    color: oklch(var(--${({ $color }) => $color }-text));
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px;
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    @media (min-width: 400px) {
        width: calc(100% - 40px);
        padding: 16px 20px;
    }
`

export const Content = styled.div`
    padding: 10px;
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 400px) {
        width: calc(100% - 40px);
        padding: 20px;
    }
`

export const Data = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px; 
`

export const DataElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    & > h6 {
        font-size: 14px;
        font-weight: 400;
        opacity: .5;
    }
`

export const DataValue = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 400px) {
        flex-direction: row;
        align-items: center;
    }
`

export const ExpiredBar = styled.span`
    padding: 4px 8px;
    outline: 1px solid var(--red);
    border-radius: 4px;
    background-color: rgba(var(--red-rgb), .1);
    color: var(--red);
    font-size: 12px;
    font-weight: 600;
`

export const ActiveBar = styled.div`
    padding: 2px 8px;
    border-radius: 9999px;
    outline: 1px solid oklch(var(--red) / 50%);
    background-color: rgba(var(--red-rgb), .1);
    color: oklch(var(--red-text));
    font-size: 10px;
    font-weight: 400;
    @media (min-width: 600px) {
        font-size: 12px;
        padding: 4px 12px;
    }
`

export const AccessSanctions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const AccessSanctionsTitle = styled.h4`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
`