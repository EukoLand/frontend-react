import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 600px) {
        flex-direction: row;   
    }
`

export const Text = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`

export const Title = styled.h4`
    font-size: 16px;
    font-weight: 600;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 300;
    opacity: .5;
`