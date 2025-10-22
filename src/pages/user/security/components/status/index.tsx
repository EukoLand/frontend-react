import { Container, Content, Header, StatusCircle, StatusText } from "./styles";

export default function Status() {
    return(
        <Container>
            <Header>
                Текущая сессия
            </Header>
            <Content>
                <StatusCircle />
                <StatusText>
                    Не в сети
                </StatusText>
            </Content>
        </Container>
    )
}