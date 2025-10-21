import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: calc(100% - 48px);
    display: flex;
    padding: 24px;
    gap: 24px;
    background-color: var(--content-second);
    border-radius: 8px;
    outline: 1px solid var(--content-third);
`

export const SkinPart = styled.div`
    width: 216px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const InfoPart = styled.div`
    width: calc(100% - 216px - 24px);
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Skin = styled.div`
    padding: 8px;
    border-radius: 8px;
    background-color: var(--content-third);
    outline: 1px solid var(--content-fourth);
`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.h4`
    font-size: 16px;
    font-weight: 400;
    opacity: .7;
`

export const Subcontent = styled.p`
    font-size: 12px;
    font-weight: 300px;
    opacity: .5;
`

export const Nickname = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 48px;
`

export const NicknameText = styled.h6`
    width: calc(100% - 12px - 120px - 32px);
    border-radius: 8px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
    padding: 12px 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export const Status = styled.div`
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 8px;
    outline: 1px solid var(--content-fourth);
    background-color: var(--content-third);
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Till = styled.h6`
    opacity: .7;
    font-size: 14px;
    font-weight: 300;
`

export const StatusContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
`

const pinger = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const StatusPinger = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--green);
    animation: 1s infinite ${pinger};
`