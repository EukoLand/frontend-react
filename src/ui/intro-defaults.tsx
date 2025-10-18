import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding-top: 80px;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
`

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`

export const Title = styled.h1`
    font-weight: 800px;
    font-size: 48px;
    & > span {
        color: var(--red);
    }
`

export const Subtitle = styled.h2`
    font-size: 18px;
    color: rgba(255, 255, 255, .5);
    margin-bottom: 64px;
    font-weight: 300;
`
