import styled from "styled-components";

export const Container = styled.header<{ start: boolean }>`
    width: calc(100% - 32px);
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    ${( props ) => props.start === true && 
    `border-bottom: 1px solid oklch(26.9% 0 0);\n
     backdrop-filter: blur(10px)`}
    @media screen and (min-width: 1000px) {
        width: calc(100% - 512px);
        padding: 16px 256px;
    }
`

export const Login = styled.button`
    border-radius: 9999px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--red);
    padding: 8px 24px;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        scale: 105%;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`