import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--content);
`

export const Content = styled.div`
    padding: 20px 0;
    display: flex;
    width: 1200px;
    gap: 16px;
    flex-direction: column;
    @media (min-width: 1000px) {
        padding: 60px 0;
        gap: 32px;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--content-second);
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 10px;
    @media (min-width: 1000px) {
        padding: 0;
    }
`

export const ColumnTitle = styled.div`
    height: 28px;
    font-size: 16px;
`

export const ColumnList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ColumnLink = styled(Link)<{ $social?: boolean }>`
    font-size: 16px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: rgba(255, 255, 255, .5);
    transition-duration: 200ms;
    & > svg {
        stroke: rgba(255, 255, 255, .5) !important;
        fill: rgba(255, 255, 255, .5) !important;
    }
    &:hover {
        ${({ $social }) => $social === true ? css`
            & > svg {
                stroke: var(--red) !important;
                fill: var(--red) !important;
            }
            color: var(--red);
        ` : css`
            color: white;
        `}
    }
`

export const ColumnText = styled.p`
    font-size: 16px;
    font-weight: 300;
    opacity: .5;
`

export const SubLogo = styled.p`
    font-size: 16px;
    font-weight: 300;
    opacity: .5;
`

export const SubContent = styled.div`
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    @media (min-width: 1000px) {
        flex-direction: row;
        padding: 0;
    }
`

export const SubText = styled.p`
    font-size: 12px;
    font-weight: 400;
    opacity: .5;
    max-width: 100%;
    @media (min-width: 1000px) {
        font-size: 14px;
    }
`

export const Logo = styled.h4`
    font-size: 28px;
    font-weight: 700;
    transition-duration: 600ms;
    display: flex;
    align-items: center;
    cursor: pointer;
`