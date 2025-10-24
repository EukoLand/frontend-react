import { MinecraftSkinViewer } from "@wiicamp/react-minecraft-skin-viewer";
import { Block, Container, Header, InfoPart, Nickname, NicknameText, Skin, SkinPart, SkinSkeleton, Status, StatusContent, StatusPinger, Subcontent, Till } from "./styles";
import ChangeNick from "./components/change-nick";
import { useEffect, useState } from "react";
import ChangeSkin from "./components/chage-skin";

export default function Profile() {
    // Ждём 250 мс перед показом скина для оптимизации сайдбара
    const [skin, setSkin] = useState<boolean>(false);

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
                                    skin="https://minotar.net/skin/user"
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
                            Some nickname which is very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                        </NicknameText>
                        <ChangeNick />
                    </Nickname>
                    <Subcontent>
                        Следующая смена доступна через 72 часа
                    </Subcontent>
                </Block>
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
            </InfoPart>
        </Container>
    )
}