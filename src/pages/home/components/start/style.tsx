import { Link } from "react-router-dom";
import styled from "styled-components";

export const Element = styled.div`
    width: 720px;
    padding: 24px;
    border-radius: 8px;
    border-left: 4px solid var(--red);
    background-color: var(--content);
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 700;
`

export const Paragraph = styled.p`
    font-size: 16px;
    color: rgba(255, 255, 255, .5);
    font-weight: 400;
    margin-bottom: 4px;
`

export const StartLink = styled(Link)`
    color: var(--red);
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: calc(150%);
        opacity: 0;
        transition-duration: 300ms;
        transition-timing-function: ease-out;
        height: 1px;
        width: 100%;
        background-color: var(--red);
        left: 0;
    }
    &:hover::after {
        top: calc(100% + 2px);
        opacity: 1;
    }
`

export const IpContainer = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
`

export const IpContent = styled.div`
    padding: 0 16px;
    width: calc(100% - 32px);
    position: absolute;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
    gap: 12px;
    & > h5 { font-weight: 300; }
`

export const IpTitle = styled.h4`
    font-weight: 600;
    color: var(--red);
`

export const IpBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-image: 
    linear-gradient(to right, #1a1a1a 1px, transparent 1px),
    linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
  background-size: 1rem 1rem;
  background-color: var(--background);
  opacity: 0.3;
`

export const UnderIp = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Version = styled.h6`
    font-size: 16px;
    font-weight: 300;
    opacity: .5;
`

export const Copied = styled.h6<{ $visibal: boolean }>`
    font-size: 16px;
    margin-right: 8px;
    opacity: ${(props) => props.$visibal ? 1 : 0};
    transition-duration: 200ms;
    color: var(--red);
`