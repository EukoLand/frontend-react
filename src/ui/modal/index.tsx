import { useEffect, type ReactNode } from "react";
import { BgCloser, Container, Content, Label } from "./styled";

interface Props { 
    open: boolean;
    anim: boolean;
    children: ReactNode;
    onClose: () => void;
    label?: string;
}

export default function Modal({ open, anim, onClose, children, label }: Props) {
    useEffect(() => {
        if(open) document.body.style.overflow = "hidden";
        else if (!anim) document.body.style.overflow = "auto"
    }, [open, anim])

    return(
        <Container $open={open} $anim={anim}>
            <BgCloser onClick={onClose}>
                Вы не должны этого видеть
            </BgCloser>
            <Content $open={open} $anim={anim}>
                {
                    label !== undefined && <Label>{label}</Label>
                }
                {children}
            </Content>
        </Container>
    )
}