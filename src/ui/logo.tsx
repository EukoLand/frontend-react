import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    transition-duration: 600ms;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        scale: 105%;
    }
`

export default function Logo() {
    return(
        <Container to="/">
            <span>Euko</span>
            <span style={{ color: "var(--red)" }}>Land</span>
        </Container>
    )
}
