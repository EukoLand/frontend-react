import styled from "styled-components";

export const Block = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    gap: 16px;
    @media (min-width: 420px) {
        width: calc(100% - 48px);
        padding: 24px;
    }
`

export const Header = styled.h2`
    font-size: 18px;
    font-weight: 600;
`