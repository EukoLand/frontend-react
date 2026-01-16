import { CustomAnchor } from "@/ui/custom-button";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 74px;
    height: calc(100vh - 74px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    @media (min-width: 700px) {
        height: 100vh;
    }
`

export const Content = styled.div`
    width: calc(100% - 20px);
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    @media (min-width: 700px) {
        padding: 0;
        width: 650px;
    }
`

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    @media (min-width: 700px) {
        gap: 12px;
    }
`

export const Background = styled.div`
    background-image: 
        linear-gradient(to right, #1a1a1a 1px, transparent 1px),
        linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
    background-size: 4rem 4rem;
    -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%);
    mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
`

export const Subtitle = styled.h2`
    font-size: 1.2rem;
    opacity: .7;
    font-weight: 300;
    text-align: center;
    @media (min-width: 700px) {
        font-size: 1.875rem;
    }
`

export const Description = styled.p`
    opacity: .55;
    font-size: 14px;
    text-align: center;
    font-weight: 350;
    line-height: 1.625rem;
    @media (min-width: 700px) {
        font-size: 20px;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`

export const Button = styled(CustomAnchor)`
    @media (max-width: 700px) {
        padding: 8px 16px !important;
    }
`