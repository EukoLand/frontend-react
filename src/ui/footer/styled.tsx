import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--content);
`

export const Content = styled.div`
    padding: 60px 0;
    display: flex;
    width: 1200px;
    gap: 32px;
    flex-direction: column;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--content-second);
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* По умолчанию 1 колонка */
    gap: 2rem; /* Промежуток между элементами */
    margin-bottom: 2rem; /* Нижний отступ */
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr); /* 3 колонки на экранах от medium */
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ColumnTitle = styled.h6`
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SubText = styled.p`
    font-size: 14px;
    font-weight: 400;
    opacity: .5;
`