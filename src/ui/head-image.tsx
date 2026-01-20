import getHead from "@/lib/utils/head";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface IProps {
    size?: number;
    fill?: boolean;
    nickname?: string;
}

interface IComponentProps {
    $size?: number;
    $fill?: boolean;
}

const HeadImageComponent = styled.img<IComponentProps>`
    ${
        ({ $size }) => $size !== undefined && css`width: ${$size}px; height: ${$size}px;`
    }
    ${
        ({ $fill }) => $fill === true && css`width: 100%; height: 100%;`
    }
`

const HeadImagePlaceholder = styled.div<IComponentProps>`
    background-color: rgba(255, 255, 255, .1);
    ${
        ({ $size }) => $size !== undefined && css`
            width: ${$size}px; 
            height: ${$size}px;
            border-radius: ${$size/10}px;
        `
    }
    ${
        ({ $fill }) => $fill === true && css`width: 100%; height: 100%;`
    }
`

export default function HeadImage({ size, fill, nickname }: IProps) {
    const [src, setSrc] = useState<string>(nickname !== undefined ? getHead(nickname) : "/profile/steve.png");
    if(size !== undefined && fill) throw Error("You cannot use size and fill same time");
    useEffect(() => {
        setSrc(
            nickname !== undefined 
                ?   getHead(nickname) 
                :   "/profile/steve.png"
        );
    }, [nickname]);
    if(nickname === undefined) {
        return <HeadImagePlaceholder 
            $fill={fill} 
            $size={size} 
            className="shimmer"  
        />;
    }
    return (
        <HeadImageComponent 
            $fill={fill} 
            $size={size} 
            src={src} 
            onError={() => {
                console.log("123")
                setSrc("/profile/steve.png")
            }}
        />
    );
}