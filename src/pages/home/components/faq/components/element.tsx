import { useState } from "react";
import { Arrow, Container, Content, Emoji, EmojiContainer, Header, Preview, Text } from "./styles";
import { Down } from "@icon-park/react";

export interface ElementProps {
    label: string;
    text: string;
    emoji: string;
}

export default function Element({ label, text, emoji }: ElementProps) {
    const [open, setOpen] = useState<boolean>(false);
    return(
        <Container>
            <Preview onClick={() => setOpen(prev => !prev)} $open={open}>
                <EmojiContainer>
                    <Emoji>{ emoji }</Emoji>
                </EmojiContainer>
                <Header>{ label }</Header>
                <Arrow $open={open}>
                    <Down theme="outline" size="20" fill="var(--red)"/>
                </Arrow>
            </Preview>
            <Content $open={open}>
                <Text>
                    { text }
                </Text>
            </Content>
        </Container>
    )
}