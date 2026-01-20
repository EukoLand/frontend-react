import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding-top: 80px;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media (min-width: 1240px) {
        width: 1200px;
    }
    @media (min-width: 1000px) {
        gap: 32px;
    }
`

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 800;
    & > span {
        color: var(--red);
    }
    @media (min-width: 1000px) {
        font-size: 48px;
    }
`

export const Subtitle = styled.h2`
    font-size: 18px;
    color: rgba(255, 255, 255, .5);
    text-align: center;
    font-weight: 300;
    @media (min-width: 1240px) {
        margin-bottom: 64px;
    }
`