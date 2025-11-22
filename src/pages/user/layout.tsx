import { Outlet, useLocation } from "react-router-dom";
import { Container, CurrentLink, Links, MenuButton, MenuButtonLine, OutletContainer, OutletContent, OutletHeader, Sidebar, SideLink } from "./styles";
import { Down } from "@icon-park/react";
import { useEffect, useState, type ReactNode } from "react";
import { Arrow, Avatar, Profile, ProfileButton, ProfileLeft, ProfileText, Role, Username } from "./styles/profile";
import { Character, CharacterAvatar, CharacterName, CharactersList, CharacterText, CharacterType, LinkedAccounts } from "./styles/character";
import { IoIosLink } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { MdBlock } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "@/store/account";
import getHead from "@/lib/utils/head";
import getLinkedAccounts from "@/lib/queries/getLinkedAccounts";
import type { LinkedAccount } from "@/lib/types/accounts";

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
    const [accountState, setAccountState] = useState<boolean>();
    const [accountAnim, setAccountAnim] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);
    const { account, setAccount } = useAccount();
    const { data } = useQuery({
        queryKey: ["idenrify"],
        queryFn: getLinkedAccounts,
    })
    const location = useLocation();

    useEffect(() => {
        if(opened) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto"
    }, [opened, closing])

    const profileHandler = () => {
        if(accountAnim) return;
        setAccountAnim(true);
        setAccountState(prev => prev === undefined ? true : !prev)
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

    const setAnotherAccount = (newAccount: LinkedAccount) => {
        setAccount(newAccount);
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
                        <ProfileLeft>
                            <Avatar src={
                                getHead(
                                    (account !== null && data !== undefined && data.filter(el => el.id === account.id).length === 1) 
                                        ? data.filter(el => el.id === account.id)[0].nickname
                                        :  "profile/steve.png"
                                )
                            } onError={(e) => e.currentTarget.src = "/profile/steve.png"} />
                            <ProfileText>
                                <Username>
                                    { 
                                        (account !== null && data !== undefined && data.filter(el => el.id === account.id).length === 1)
                                            ?   data.filter(el => el.id === account.id)[0].nickname
                                            :  "Не выбран"
                                    }
                                </Username>
                                <Role>
                                    Игрок
                                </Role>
                            </ProfileText>
                        </ProfileLeft>
                        <Arrow $open={accountState === true}>
                            <Down fill="rgba(255, 255, 255, .5)" size={20} strokeWidth={4} />
                        </Arrow>
                    </ProfileButton>
                    <CharactersList $anim={accountAnim} $open={accountState}>
                        {
                            data !== undefined && data.map((el, index) => 
                                <Character key={index} onClick={() => setAnotherAccount(el)}>
                                    <CharacterAvatar src={getHead(el.nickname)} onError={(e) => e.currentTarget.src = "/profile/steve.png"} />
                                    <CharacterText>
                                        <CharacterName>
                                            {el.nickname}
                                        </CharacterName>
                                        <CharacterType>
                                            Игрок
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