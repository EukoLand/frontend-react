import { useEffect, type ReactNode } from "react";
import { BgCloser, Blocker, Container, Content, Label } from "./styled";

interface Props { 
    open: boolean;
    anim: boolean;
    children: ReactNode;
    onClose: () => void;
    label?: string;
    block: boolean;
    overflow?: string;
    contentBox?: boolean;
}

export default function Modal({ open, anim, onClose, children, label, block, overflow, contentBox }: Props) {
    useEffect(() => {
        if(open) document.body.style.overflow = "hidden";
        else if (!anim) document.body.style.overflow = "auto"
    }, [open, anim])

    return(
        <Container $open={open} $anim={anim}>
            { block && <Blocker /> }
            <BgCloser onClick={onClose}>
                Вы не должны этого видеть
            </BgCloser>
            <Content $open={open} $anim={anim} $overflow={overflow} $contentBox={contentBox}>
                {
                    label !== undefined && <Label>{label}</Label>
                }
                {children}
            </Content>
        </Container>
    )
}