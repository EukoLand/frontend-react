import { useEffect, useState } from "react";
import { CustomButton } from "../custom-button";
import Logo from "../logo";
import { Buttons, Container, Login, Menu, MenuButton, MenuButtonLine, MenuLine, MenuLink, MenuLogin } from "./styles";

export default function Header() {
    const [scroll, setScroll] = useState<number>(0);
    const [opened, setOpened] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);
    useEffect(() => {
        setScroll(document.documentElement.scrollTop)
        const handleScroll = () => {
            setScroll(document.documentElement.scrollTop)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const hide = () => {
        setClosing(true)
        setTimeout(() => {
            setOpened(false)
            setClosing(false)
        }, 200)
    }
    return(
        <Container $start={scroll < 100}>
            <Logo />
            <Buttons>
                <CustomButton
                    $padding={[8, 20]}
                    $font={16}
                    $color="var(--red)"
                >
                    Главная
                </CustomButton>
                <CustomButton
                    $padding={[8, 20]}
                    $font={16}
                    $background="transparent"
                    $animation="background"
                    $animationvalue="var(--content)"
                >
                    Вики
                </CustomButton>
            </Buttons>
            <Login>Войти</Login>
            <MenuButton 
                $opened={opened} 
                onClick={() => opened ? hide() : setOpened(true)}
                disabled={closing}
            >
                { [...Array(3)].map((_, index) => <MenuButtonLine key={index} />) }
                <Menu $opened={opened} $closing={closing}>
                    <MenuLink to={"/"} $primary>
                        Главная
                    </MenuLink>
                    <MenuLink to={"/wiki"}>
                        Вики
                    </MenuLink>
                    <MenuLine />
                    <MenuLogin to={"/"}>
                        Войти
                    </MenuLogin>
                </Menu>
            </MenuButton>
        </Container>
    )
}