import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const Container = styled(Link)<{ $size?: number, $anim: boolean }>`
    font-size: ${(props) => props.$size !== undefined ? props.$size*0.6 : 24}px;
    font-weight: 700;
    transition-duration: 600ms;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (min-width: 700px) {
        font-size: ${(props) => props.$size || 24}px;
    }
    ${({ $anim }) => $anim && css`
        &:hover {
            scale: 105%;
        }
    `}
`

export default function Logo({ size, anim = true }: { size?: number, anim?: boolean }) {
    return(
        <Container to="/" $size={size} $anim={anim}>
            <span>Euko</span>
            <span style={{ color: "var(--red)" }}>Land</span>
        </Container>
    )
}
