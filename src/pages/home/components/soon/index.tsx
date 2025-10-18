import { CustomButton } from "@/ui/custom-button";
import { Container, Content, Image, Pinger, PingText, Status, Subtitle, Text, Title } from "./style";

export default function Soon() {
    return(
        <Container>
            <Content>
                <Status>
                    <Pinger />
                    <PingText>
                        Скоро запуск
                    </PingText>
                </Status>
                <Text>
                    <Title>
                        Скоро <span>открытие</span>
                    </Title>
                    <Subtitle>
                        Регистрация уже доступна.<br/>
                        Будь среди первых. 
                    </Subtitle>
                </Text>
                <CustomButton
                    $animation="background"
                    $animationvalue="rgba(var(--red-rgb), .5)"
                    $padding={[20, 40]}
                    $background="var(--red)"
                    $weight={600}
                >
                    Занять своё место
                </CustomButton>
            </Content>
            <Image src="/soon.png" alt="Скоро открытие!" />
        </Container>
    )
}