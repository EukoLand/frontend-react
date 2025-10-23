import { PiInfoLight } from "react-icons/pi";
import { Block } from "../../styles";
import { Container, Description, Text, Title } from "./styled";

export default function Info() {
    return(
        <Block>
            <Container>
                <PiInfoLight 
                    fill="oklch(79.5% 0.184 86.047)" 
                    size={24} 
                    stroke="oklch(79.5% 0.184 86.047)" 
                    strokeWidth={6} 
                />
                <Text>
                    <Title>
                        Важная информация о дополнительных аккаунтах:
                    </Title>
                    <Description>
                            • Все наказания на дополнительных аккаунтах автоматически переносятся на основной<br />
                            • Управление твинками осуществляется через переключение в сайдбаре<br />
                            • Для создания твинка требуется одобрение модерации<br />
                    </Description>
                </Text>
            </Container>
        </Block>
    )
}