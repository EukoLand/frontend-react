import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const InputLabel = styled.h5`
    font-size: 16px;
    font-weight: 500;
    opacity: .7;
`

export const Input = styled.input<{ $invalid: boolean; }>`
    width: calc(100% - 32px);
    outline: 1px solid ${({ $invalid }) => $invalid ? 'var(--red)' : 'var(--content-fourth)'};
    background-color: var(--content-third);
    border-radius: 8px;
    padding: 0 16px;
    font-size: 16px;
    height: 50px;
    transition-duration: 200ms;
    &:focus {
        outline: 1px solid var(--red);
        &::placeholder {
            color: transparent;
        }
    }
`

export const InputValidation = styled.h6<{ $error: boolean }>`
    font-size: 14px;
    color: ${({ $error }) => $error ? 'var(--red)' : 'var(--green)' };
    font-weight: 400;
`

export const Warning = styled.div`
    width: calc(100% - 32px);
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    border-radius: 8px;
    padding: 16px 16px;
    line-height: 18px;
    font-size: 16px;
    color: rgba(255, 255, 255, .5);
    & > span {
        font-weight: 600;
        color: var(--red);
    }
`