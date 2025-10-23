import { Outlet, useLocation } from "react-router-dom";
import { Container, CurrentLink, Links, MenuButton, MenuButtonLine, OutletContainer, OutletContent, OutletHeader, Sidebar, SideLink } from "./styles";
import { Down } from "@icon-park/react";
import { useEffect, useState, type ReactNode } from "react";
import { Arrow, Avatar, Profile, ProfileButton, ProfileText, Role, Username } from "./styles/profile";
import { Character, CharacterAvatar, CharacterName, CharactersList, CharacterText, CharacterType, LinkedAccounts } from "./styles/character";
import { IoIosLink } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { MdBlock } from "react-icons/md";

interface Account {
    skin: string;
    username: string;
    type: string;
}

const accounts: Account[] = [
    {
        skin: "/profile/steve.png",
        username: "Steve",
        type: "Игрок",
    },
    {
        skin: "/profile/steve.png",
        username: "Steve",
        type: "Игрок",
    },
    {
        skin: "/profile/steve.png",
        username: "Steve",
        type: "Игрок",
    },
    {
        skin: "/profile/steve.png",
        username: "Steve",
        type: "Игрок",
    },
    {
        skin: "/profile/steve.png",
        username: "Steve",
        type: "Игрок",
    },
]

interface Route {
    label: string;
    route: string;
    icon: ReactNode;
}

interface IgnoredRoute {
    label: string;
    route: string;
}

const routes: Route[] = [
    {
        label: 'Профиль',
        route: '/user/profile',
        icon: <BsPerson fill="inherit" size={20} />,
    },
    {
        label: 'Кошелёк',
        route: '/user/wallet',
        icon: <FaRegCreditCard fill="inherit" size={20} />,
    },
    {
        label: 'Ограничения',
        route: '/user/sanctions',
        icon: <MdBlock fill="inherit" size={20} />,
    },
    {
        label: 'Безопасность',
        route: '/user/security',
        icon: <GoShieldLock fill="inherit" size={20} />,
    },
]

const ignoreRoutes = ['/user/linked-accounts']

const ignoredHeaders: IgnoredRoute[] = [
    {
        label: 'Привязанные аккаунты',
        route: '/user/linked-accounts',
    }
]

export default function UserLayout() {
    const [account, setAccount] = useState<boolean>();
    const [accountAnim, setAccountAnim] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        if(opened) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto"
    }, [opened, closing])

    const profileHandler = () => {
        if(accountAnim) return;
        setAccountAnim(true);
        setAccount(prev => prev === undefined ? true : !prev)
        setTimeout(() => {
            setAccountAnim(false);
        }, 450)
    }

    const hide = () => {
        setClosing(true)
        setTimeout(() => {
            setOpened(false)
            setClosing(false)
        }, 200)
    }

    return(
        <Container>
            <MenuButton 
                $opened={opened} 
                onClick={() => opened ? hide() : setOpened(true)}
                disabled={closing}
            >
                { [...Array(3)].map((_, index) => <MenuButtonLine key={index} />) }
            </MenuButton>
            <Sidebar $open={opened}>
                <Profile>
                    <ProfileButton disabled={accountAnim} onClick={profileHandler}>
                        <Avatar src="/profile/steve.png" />
                        <ProfileText>
                            <Username>
                                Не выбран
                            </Username>
                            <Role>
                                Игрок
                            </Role>
                        </ProfileText>
                        <Arrow $open={account === true}>
                            <Down fill="rgba(255, 255, 255, .5)" size={20} strokeWidth={4} />
                        </Arrow>
                    </ProfileButton>
                    <CharactersList $anim={accountAnim} $open={account}>
                        {
                            accounts.map((el, index) => 
                                <Character key={index}>
                                    <CharacterAvatar src={el.skin} />
                                    <CharacterText>
                                        <CharacterName>
                                            {el.username}
                                        </CharacterName>
                                        <CharacterType>
                                            {el.type}
                                        </CharacterType>
                                    </CharacterText>
                                </Character>
                            )
                        }
                        <LinkedAccounts to={'linked-accounts'}>
                            <IoIosLink size={24} strokeWidth={4} fill="rgba(255, 255, 255, .5)" />
                            Привязанные аккаунты
                        </LinkedAccounts>
                    </CharactersList>
                </Profile>
                <Links>
                    {
                        !ignoreRoutes.includes(location.pathname) && 
                        <CurrentLink $index={routes.map(el => el.route).indexOf(location.pathname)} />
                    }
                    
                    {
                        routes.map((el, index) => 
                            <SideLink key={index} to={el.route}>
                                { el.icon }
                                { el.label }
                            </SideLink>
                        )
                    }
                </Links>
            </Sidebar>
            <OutletContainer>
                <OutletContent>
                    {
                        !ignoreRoutes.includes(location.pathname) ?
                            <OutletHeader>
                                { routes.filter(el => el.route === location.pathname)[0].label }
                            </OutletHeader>
                            :
                            <OutletHeader>
                                { ignoredHeaders.filter(el => el.route === location.pathname)[0].label }
                            </OutletHeader>
                    }
                    <Outlet />
                </OutletContent>
            </OutletContainer>
        </Container>
    )
}