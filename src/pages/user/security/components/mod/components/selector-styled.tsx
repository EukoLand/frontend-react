import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const Content = styled.button`
    width: 100%;
    padding: 16px;
    outline: 1px solid var(--content-fourth);
    border-radius: 8px;
    background-color: var(--content-second);
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
`

export const Arrow = styled.div<{ $open: boolean }>`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 200ms;
    opacity: .5;
    rotate: ${({ $open }) => $open ? 90 : 0 }deg;
`

export const Line = styled.div`
    width: 1px;
    height: 22px;
    opacity: .5;
    background-color: white;
`

export const Value = styled.h5`
    font-size: 20px;
    font-weight: 500;
    opacity: .75;
`

export const Dropdown = styled.div<{ $open: boolean }>`
    /* display: flex; нет так как им управляет напрямую useRef */
    opacity: ${({ $open }) => $open ? 1 : 0 };
    transition-duration: 300ms;
    width: calc(100% - 24px);
    top: calc(100% + 8px);
    position: absolute;
    padding: 12px;
    flex-direction: column;
    gap: 4px;
    background-color: var(--content-second);
    outline: 1px solid var(--content-fourth);
    border-radius: 8px;
    z-index: 101;
`

export const Variant = styled.button`
    font-size: 20px;
    font-weight: 500;
    opacity: .75;
    width: 100%;
    text-align: left;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        background-color: var(--content-third);
    }
`

export const Skeleton = styled.div`
    height: 56px; // padding + Line.heigh + outline 16+16+22+2
    width: 100%;
    position: absolute;
    border-radius: 8px;
    backdrop-filter: blur(1px);
    outline: 1px solid var(--content-fourth);
    z-index: 101;
`