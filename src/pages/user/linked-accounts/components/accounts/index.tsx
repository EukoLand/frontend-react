import { Block, Header } from "../../styles";
import { Main, MainAccount, MainImage, MainText, MainTitle, MainUsername, OnlinePinger, OtherAccount, OtherAccounts, OtherImage, OtherOnline, Others, OthersTitle, OtherText, OtherUsername, Register, Top } from "./styled";
import { MdVerified } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import getMainAccount from "@/lib/queries/linkedAccounts/getMainAccount";
import getHead from "@/lib/utils/head";
import formatDate from "@/lib/utils/fotmatDate";
import getOtherAccounts from "@/lib/queries/linkedAccounts/getOtherAccounts";

// const mainAccount: IAccount = {
//     id: '1',
//     // image: 'https://mc-heads.net/avatar/Phemida/64',
//     // isOnline: true,
//     registration: '15.01.2024',
//     username: 'Phemida',
// }

// const otherAccounts: IAccount[] = [
//     {
//         id: '2',
//         // image: 'https://mc-heads.net/avatar/Gravedigger/48',
//         // isOnline: false,
//         registration: '51.52.2023',
//         username: 'Uzi82',
//     },
//     {
//         id: '3',
//         // image: 'https://mc-heads.net/avatar/Gravedigger/48',
//         // isOnline: true,
//         // registration: '21.12.2023',
//         username: 'Gordon',
//     },
// ]

export default function Accounts() {
    const { data: mainAccount } = useQuery({
        queryKey: ['getMainAccount'],
        queryFn: getMainAccount, 
    });

    const { data: otherAccounts } = useQuery({
        queryKey: ['getOtherAccounts'],
        queryFn: getOtherAccounts, 
    });
    
    return(
        <Block>
            <Top>
                <Header>
                    Мои аккаунты
                </Header>
                {/* <CustomButton
                    $padding={[4, 12]}
                    $rounded={8}
                    $background="var(--red)"
                    $animation="background"
                    $animationvalue="rgba(var(--red-rgb), .5)"
                    $font={14}
                    $hideOn={600}
                >
                    Подать заявку на новый аккаунт
                </CustomButton> */}
            </Top>
            <Main>
                <MainTitle>
                    <MdVerified fill="var(--red)" size={24} />
                    ОСНОВНОЙ АККАУНТ
                </MainTitle>
                <MainAccount>
                    <MainImage src={getHead(mainAccount !== undefined ? mainAccount.nickname : "profile/steve.png")} onError={(e) => e.currentTarget.src = "/profile/steve.png"} />
                    <MainText>
                        <MainUsername>
                            {mainAccount !== undefined ? mainAccount.nickname : "Неизвестный игрок"}
                            {/* <MainOnline $online={mainAccount.isOnline}>
                                { mainAccount.isOnline && <OnlinePinger/> }
                                { mainAccount.isOnline ? 'Online' : 'Offline' }
                            </MainOnline> */}
                        </MainUsername>
                        <Register>
                            Регистрация: {mainAccount !== undefined ? formatDate(mainAccount.createdAt) : "??.??.????"}
                        </Register>
                    </MainText>
                </MainAccount>
            </Main>
            {   otherAccounts !== undefined && otherAccounts.length > 0 &&
                <Others>
                    <OthersTitle>
                        Дополнительные аккаунты ({otherAccounts.length})
                    </OthersTitle>
                    <OtherAccounts>
                        {
                            otherAccounts.map(el =>
                                <OtherAccount key={el.id}>
                                    <OtherImage src={getHead(el.nickname)} onError={(e) => e.currentTarget.src = "/profile/steve.png"} />
                                    <OtherText>
                                        <OtherUsername>
                                            {el.nickname}
                                            {/* <OtherOnline $online={el.isOnline}>
                                                { el.isOnline && <OnlinePinger/> }
                                                { el.isOnline ? 'Online' : 'Offline' }
                                            </OtherOnline> */}
                                        </OtherUsername>
                                        <Register>
                                            Регистрация: {formatDate(el.createdAt)}
                                        </Register>
                                    </OtherText>
                                </OtherAccount>
                            )
                        }
                    </OtherAccounts>
                </Others>
            }
        </Block>
    )
}