import styled, { css } from "styled-components";

export const Element = styled.div<{ $reverced: boolean }>`
    width: calc(100% - 40px);
    border-radius: 12px;
    outline: 1px solid var(--content);
    background-color: var(--content);
    transition-duration: 200ms;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px 20px 0 20px;
    object-fit: cover;
    align-items: center;
    &:hover {
        outline-color: var(--red);
    }
    &:hover > div > img {
        scale: 110%;
    }
    @media (min-width: 900px) {
        width: calc(100% - 100px);
        padding: 0 40px;
        height: 340px;
        flex-direction: row;
        ${(props) => props.$reverced && css`flex-direction: row-reverse;`}
    }
`

export const ElementImgContainer = styled.div`
    max-width: 280px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-self: flex-end;
    box-sizing: border-box;
    overflow: hidden;
    @media (min-width: 900px) {
        margin-right: 32px;
        width: 32%;
    }
`

export const ElementImage = styled.img`
    align-self: flex-end;
    transition-duration: 500ms;
    width: 100%;
    user-select: none;
`

export const ElementText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    @media (min-width: 900px) {
        width: calc(60% - 32px);
    }
`

export const ElementHeader = styled.h1`
    font-size: 24px;
    font-weight: 700;
    @media (min-width: 600px) {
        font-size: 30px;
    }
`

export const ElementParagraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    opacity: .5;
    @media (min-width: 600px) {
        font-size: 18px;
    }
`