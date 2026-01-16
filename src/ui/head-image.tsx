import getHead from "@/lib/utils/head";
import styled, { css } from "styled-components";

interface IProps {
    size?: number;
    fill?: boolean;
    nickname: string;
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

export default function HeadImage({ size, fill, nickname }: IProps) {
    if(size !== undefined && fill) throw Error("You cannot use size and fill same time");
    return (
        <HeadImageComponent 
            $fill={fill} 
            $size={size} 
            src={getHead(nickname)} 
            onError={e => e.currentTarget.src = "profile/steve.png"}
        />
    );
}