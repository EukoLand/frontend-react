import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IProps {
    $rounded?: number;
    $background?: string;
    $color?: string;
    $animation?: 'scale' | 'outline' | 'background' | 'scale/outline' | 'scale/background';
    $animationvalue?: string;
    $animationvalue2?: string;
    $padding?: [number, number];
    $font?: number;
    $lineheight?: number;
    $weight?: number;
    $outline?: string;
    $gap?: number;
    $stroke?: string;
    $size?: [string, string];
}

const mainStyles = css<IProps>`
    font-size: ${( props ) => props.$font || 16 }px;
    line-height: ${( props ) => props.$lineheight || 24 }px;
    font-weight: ${( props ) => props.$weight || 400 };
    background-color: ${( props ) => props.$background || 'var(--content)'};
    transition-duration: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.$gap !== undefined ? props.$gap : 4 }px;
    padding: ${( props ) => 
        props.$padding !== undefined ? 
        `${props.$padding[0]}px ${props.$padding[1]}px` : 
        '16px' 
    };
    width: fit-content;
    cursor: pointer;
    outline: ${( props ) => props.$outline || 'none' };
    color: ${ (props) => props.$color || 'white' };
    border-radius: ${ (props) => props.$rounded || '9999' }px;
    stroke: ${(props) => props.$stroke || "white"};
    ${(props) => props.$size !== undefined && css`
        width: ${props.$size[0]};
        height: ${props.$size[1]};
    `}
    &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }
    &:hover {
        ${(props) => {
            if(props.$animation === undefined) return;
            switch(props.$animation) {
                case 'outline': {
                    return css`
                        outline-color: ${props.$animationvalue};
                        color: ${props.$animationvalue};
                    `
                }
                case 'background': {
                    return css`
                        background-color: ${props.$animationvalue};
                    `
                }
                case 'scale': {
                    return css`
                        scale: 105%;
                    `
                }
                case 'scale/outline': {
                    return css`
                        scale: 105%;
                        outline-color: ${props.$animationvalue};
                        stroke: ${props.$animationvalue};
                        color: ${props.$animationvalue};
                    `
                }
                case 'scale/background': {
                    return css`
                        scale: 105%;
                        stroke: ${props.$animationvalue};
                        color: ${props.$animationvalue};
                        background-color: ${props.$animationvalue2};
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
export const CustomAnchor = styled.a<IProps>`${mainStyles}`