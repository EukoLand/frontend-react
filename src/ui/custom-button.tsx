import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IProps {
    rouded?: number;
    background?: string;
    color?: string;
    animation?: 'scale' | 'outline' | 'background';
    animationValue?: string;
    padding?: [number, number];
    font?: number;
    lineHeight?: number;
    weight?: number;
}

const mainStyles = css<IProps>`
    font-size: ${( props ) => props.font || 16 }px;
    line-height: ${( props ) => props.lineHeight || 24 }px;
    font-weight: ${( props ) => props.weight || 400 };
    background-color: ${( props ) => props.background || 'var(--content)'};
    transition-duration: 300ms;
    padding: ${( props ) => 
        props.padding !== undefined ? 
        `${props.padding[0]}px ${props.padding[1]}px` : 
        '16px' 
    };
    cursor: pointer;
    color: ${ (props) => props.color || 'white' };
    border-radius: ${ (props) => props.rouded || '9999' }px;
    &:hover {
        ${(props) => {
            if(props.animation === undefined) return;
            switch(props.animation) {
                case 'outline': {
                    return css`
                        outline-color: ${props.animationValue};
                        color: ${props.animationValue};
                    `
                }
                case 'background': {
                    return css`
                        background-color: ${props.animationValue};
                    `
                }
                case 'scale': {
                    return css`
                        scale: 105%;
                    `
                }
                default: {
                    return css`
                        scale: 105%;
                    `
                }
            }
        }}
    }
`

export const CustomButton = styled.button<IProps>`${mainStyles}`
export const CustomLink = styled(Link)<IProps>`${mainStyles}`