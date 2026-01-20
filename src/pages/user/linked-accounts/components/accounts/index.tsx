import { Block, Header } from "../../styles";
import { Main, MainAccount, MainText, MainTitle, MainUsername, OtherAccount, OtherAccounts, OtherImage, Others, OthersTitle, OtherText, OtherUsername, Register, Top } from "./styled";
import { MdVerified } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import getMainAccount from "@/lib/queries/linkedAccounts/getMainAccount";
import getHead from "@/lib/utils/head";
import formatDate from "@/lib/utils/fotmatDate";
import getOtherAccounts from "@/lib/queries/linkedAccounts/getOtherAccounts";
import HeadImage from "@/ui/head-image";


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
                    <HeadImage
                        size={64}
                        nickname={mainAccount?.nickname}
                    />
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
            {   otherAccounts !== undefined && otherAccounts.filter(el => el.id !== mainAccount?.id).length > 0 &&
                <Others>
                    <OthersTitle>
                        Дополнительные аккаунты ({otherAccounts.filter(el => el.id !== mainAccount?.id).length})
                    </OthersTitle>
                    <OtherAccounts>
                        {
                            otherAccounts.filter(el => el.id !== mainAccount?.id).map(el =>
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