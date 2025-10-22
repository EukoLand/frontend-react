import styled, { css } from "styled-components"

export const Container = styled.div`
    width: calc(100% - 48px);
    padding: 24px;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: var(--content-second);
    outline: 1px solid var(--content-third);
    gap: 16px;
`

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 600;
`

export const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Block = styled.div`
    width: calc(100% - 32px);
    display: flex;
    padding: 16px;
    border-radius: 8px;
    justify-content: space-between;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    background-color: var(--content-third);
    @media (min-width: 700px) {
        flex-direction: row;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    justify-content: space-between;
`

export const Title = styled.h4`
    font-size: 16px;
    font-weight: 500;
`

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 400;
    opacity: .5;
`

export const Switch = styled.div<{ $on: boolean }>`
    width: 64px;
    height: 32px;
    position: relative;
    border-radius: 9999px;
    transition-duration: 200ms;
    background-color: ${({ $on }) => $on ? 'var(--green)' : 'var(--content-fourth)' };
`

export const SwitchThumb = styled.div<{ $on: boolean }>`
    top: 1px;
    height: 30px;
    width: 30px;
    position: absolute;
    background-color: white;
    border-radius: 9999px;
    transition-duration: 200ms;
    z-index: 4;
    ${({ $on }) => $on ? css`left: calc(100% - 31px);` : css`left: 1px;`}
`

export const SwitchBtn = styled.button`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 5;
`

export const ModalText = styled.p`
    font-size: 14px;
    opacity: .5;
    font-weight: 400;
`

export const ModalButtons = styled.div`
    display: flex;
    gap: 8px;
    top: 0;
    left: 0;
    flex-direction: column-reverse;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`