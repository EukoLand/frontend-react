import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    outline: 1px solid var(--content-fourth);
    border-radius: 8px;
    background-color: var(--content-second);
    display: flex;
    gap: 12px;
    align-items: center;
`

export const Icon = styled.div`
    display: none;
    @media (min-width: 400px) {
        display: block;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Title = styled.h5`
    font-size: 14px;
    font-weight: 400;
`

export const Description = styled.h6`
    font-size: 12px;
    font-weight: 400;
    opacity: .5;
`