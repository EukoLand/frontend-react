import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: 1s ease-in-out ${appear};
`