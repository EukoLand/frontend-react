import styled, { css } from "styled-components";

export const Element = styled.div<{ $reverced: boolean }>`
    width: calc(100% - 80px);
    height: 340px;
    border-radius: 12px;
    outline: 1px solid var(--content);
    background-color: var(--content);
    transition-duration: 200ms;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    object-fit: cover;
    align-items: center;
    ${(props) => props.$reverced && css`flex-direction: row-reverse;`}
    &:hover {
        outline-color: var(--red);
    }
    &:hover > div > img {
        scale: 110%;
    }
`

export const ElementImgContainer = styled.div`
    width: 32%;
    margin-right: 32px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-self: flex-end;
    box-sizing: border-box;
    overflow: hidden;
`

export const ElementImage = styled.img`
    align-self: flex-end;
    transition-duration: 500ms;
    width: 100%;
    user-select: none;
`

export const ElementText = styled.div`
    display: flex;
    width: calc(60% - 32px);
    flex-direction: column;
    gap: 12px;
`

export const ElementHeader = styled.h1`
    font-size: 30px;
    font-weight: 700;
`

export const ElementParagraph = styled.p`
    font-weight: 300;
    font-size: 18px;
    opacity: .5;
`