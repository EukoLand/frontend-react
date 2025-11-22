import type { AccessSanction } from "@/lib/types/sanctions";
import { Container, Description, Icon, Text, Title } from "./styles";
import { MdBlock } from "react-icons/md";

export default function AccessSanction({ description, title }: AccessSanction) {
    return(
        <Container>
            <Icon>
                <MdBlock size={20} fill="var(--red)" />
            </Icon>
            <Text>
                <Title>
                    { title }
                </Title>
                <Description>
                    { description }
                </Description>
            </Text>
        </Container>
    )
}