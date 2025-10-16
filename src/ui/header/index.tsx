import { CustomButton } from "../custom-button";
import Logo from "../logo";
import { Buttons, Container, Login } from "./styles";

export default function Header() {
    return(
        <Container>
            <Logo />
            <Buttons>
                <CustomButton
                    padding={[8, 20]}
                    font={16}
                    color="var(--red)"
                >
                    Главная
                </CustomButton>
                <CustomButton
                    padding={[8, 20]}
                    font={16}
                    background="var(--background)"
                    animation="background"
                    animationValue="var(--content)"
                >
                    Вики
                </CustomButton>
            </Buttons>
            <Login>Войти</Login>
        </Container>
    )
}