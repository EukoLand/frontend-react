import { useEffect, useState } from "react";
import { CustomAnchor, CustomButton } from "../custom-button";
import Logo from "../logo";
import { Buttons, Container, Login, Menu, MenuButton, MenuButtonLine, MenuLine, MenuLink, MenuLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { baseURL } from "@/main";

export default function Header() {
    const navigate = useNavigate();
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

    const onLogin = () => {
        const authWindow = window.open(
            baseURL + "auth/discord",
            "auth",
            "width=500,height=600,resizable=no,status=no,scrollbars=no,top=120,left=40",
        );
        if (authWindow === null) return;
        const timer = setInterval(() => {
            if (authWindow.closed) {
                clearInterval(timer);
                navigate("/user/profile");
            }
        }, 1000);
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
                <CustomAnchor
                    href="https://eukoland.gitbook.io/docs"
                    $padding={[8, 20]}
                    $font={16}
                    $background="transparent"
                    $animation="background"
                    $animationvalue="var(--content)"
                >
                    Вики
                </CustomAnchor>
            </Buttons>
            <Login onClick={onLogin}>Войти</Login>
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