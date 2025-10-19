import { Outlet } from "react-router-dom";
import { Container, Sidebar } from "./styles";
import { Down } from "@icon-park/react";
import { useState } from "react";
import { Arrow, Avatar, Profile, ProfileButton, ProfileText, Role, Username } from "./styles/profile";
import { Character, CharacterAvatar, CharacterName, CharactersList, CharacterText, CharacterType, LinkedAccounts } from "./styles/character";
import { IoIosLink } from "react-icons/io";

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

export default function UserLayout() {
    const [account, setAccount] = useState<boolean>();
    const [accountAnim, setAccountAnim] = useState<boolean>(false);
    const profileHandler = () => {
        setAccountAnim(true);
        setAccount(prev => prev === undefined ? true : !prev)
        setTimeout(() => {
            setAccountAnim(false);
        }, 500)
    }
    return(
        <Container>
            <Sidebar>
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
            </Sidebar>
            <Outlet />
        </Container>
    )
}