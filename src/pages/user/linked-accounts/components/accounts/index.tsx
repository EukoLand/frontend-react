import { CustomButton } from "@/ui/custom-button";
import { Block, Header } from "../../styles";
import { Main, MainAccount, MainImage, MainOnline, MainText, MainTitle, MainUsername, OnlinePinger, OtherAccount, OtherAccounts, OtherImage, OtherOnline, Others, OthersTitle, OtherText, OtherUsername, Register, Top } from "./styled";
import { MdVerified } from "react-icons/md";
import type { IAccount } from "@/types/accounts";

const mainAccount: IAccount = {
    id: '1',
    image: 'https://mc-heads.net/avatar/Phemida/64',
    isOnline: true,
    registration: '15.01.2024',
    username: 'Phemida',
}

const otherAccounts: IAccount[] = [
    {
        id: '2',
        image: 'https://mc-heads.net/avatar/Gravedigger/48',
        isOnline: false,
        registration: '51.52.2023',
        username: 'Uzi82',
    },
    {
        id: '3',
        image: 'https://mc-heads.net/avatar/Gravedigger/48',
        isOnline: true,
        registration: '21.12.2023',
        username: 'Gordon',
    },
]

export default function Accounts() {
    return(
        <Block>
            <Top>
                <Header>
                    Мои аккаунты
                </Header>
                <CustomButton
                    $padding={[4, 12]}
                    $rounded={8}
                    $background="var(--red)"
                    $animation="background"
                    $animationvalue="rgba(var(--red-rgb), .5)"
                    $font={14}
                    $hideOn={600}
                >
                    Подать заявку на новый аккаунт
                </CustomButton>
            </Top>
            <Main>
                <MainTitle>
                    <MdVerified fill="var(--red)" size={24} />
                    ОСНОВНОЙ АККАУНТ
                </MainTitle>
                <MainAccount>
                    <MainImage src={mainAccount.image} />
                    <MainText>
                        <MainUsername>
                            {mainAccount.username}
                            <MainOnline $online={mainAccount.isOnline}>
                                { mainAccount.isOnline && <OnlinePinger/> }
                                { mainAccount.isOnline ? 'Online' : 'Offline' }
                            </MainOnline>
                        </MainUsername>
                        <Register>
                            Регистрация: {mainAccount.registration}
                        </Register>
                    </MainText>
                </MainAccount>
            </Main>
            <Others>
                <OthersTitle>
                    Дополнительные аккаунты ({otherAccounts.length})
                </OthersTitle>
                <OtherAccounts>
                    {
                        otherAccounts.map(el =>
                            <OtherAccount key={el.id}>
                                <OtherImage src={el.image} />
                                <OtherText>
                                    <OtherUsername>
                                        {el.username}
                                        <OtherOnline $online={el.isOnline}>
                                            { el.isOnline && <OnlinePinger/> }
                                            { el.isOnline ? 'Online' : 'Offline' }
                                        </OtherOnline>
                                    </OtherUsername>
                                    <Register>
                                        Регистрация: {el.registration}
                                    </Register>
                                </OtherText>
                            </OtherAccount>
                        )
                    }
                </OtherAccounts>
            </Others>
        </Block>
    )
}