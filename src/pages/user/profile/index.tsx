import { MinecraftSkinViewer } from "@wiicamp/react-minecraft-skin-viewer";
import { 
    Block, 
    Container, 
    Header, 
    InfoPart, 
    Nickname, 
    NicknameText, 
    Skin, 
    SkinPart, 
    SkinSkeleton, 
    Subcontent 
} from "./styles";
import ChangeNick from "./components/change-nick";
import { useEffect, useState } from "react";
import ChangeSkin from "./components/chage-skin";
import { useAccount } from "@/store/account";
import { baseURL } from "@/main";
import { useQuery } from "@tanstack/react-query";
import getLinkedAccounts from "@/lib/queries/getLinkedAccounts";
import count72hours from "@/lib/utils/count72hours";

export default function Profile() {
    // Ждём 250 мс перед показом скина для оптимизации сайдбара
    const [skin, setSkin] = useState<boolean>(false);
    const account = useAccount((store) => store.account);
    const { data } = useQuery({
        queryKey: ['idenrify'],
        queryFn: getLinkedAccounts,
    });

    useEffect(() => {
        setTimeout(() => {
            setSkin(true);
        }, 250)
    }, [setSkin])

    return(
        <Container>
            <SkinPart>
                {
                    skin ? 
                            <Skin>
                                <MinecraftSkinViewer 
                                    width={200}
                                    height={400}
                                    background="#323232"
                                    control
                                    walk
                                    skin={baseURL + `media/view/${account !== null ? account.nickname : 'user' }`}
                                />
                            </Skin>
                        : <SkinSkeleton />
                }
                <ChangeSkin />
            </SkinPart>
            <InfoPart>
                <Block>
                    <Header>
                        Никнейм
                    </Header>
                    <Nickname>
                        <NicknameText>
                            { account !== null ? account.nickname : 'Аккаунт не задан...' }
                        </NicknameText>
                        <ChangeNick />
                    </Nickname>
                    <Subcontent>
                        { 
                            data !== undefined && 
                            account !== null && 
                            count72hours(
                                data.filter(el => el.id === account.id)[0]
                                                    .lastNicknameChangeAt
                            ) 
                        }
                    </Subcontent>
                </Block>
                {/* 
                    <Block>
                        <Header>
                            Статус проходки
                        </Header>
                        <Status>
                            <StatusContent>
                                <StatusPinger/>
                                Активна
                            </StatusContent>
                            <Till>
                                До 15.06.2025
                            </Till>
                        </Status>
                    </Block> 
                */}
            </InfoPart>
        </Container>
    )
}