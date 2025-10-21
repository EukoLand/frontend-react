import { MinecraftSkinViewer } from "@wiicamp/react-minecraft-skin-viewer";
import { Block, Container, Header, InfoPart, Nickname, NicknameText, Skin, SkinPart, Status, StatusContent, StatusPinger, Subcontent, Till } from "./styles";
import { CustomButton } from "@/ui/custom-button";
import ChangeNick from "./components/change-nick";

export default function Profile() {
    return(
        <Container>
            <SkinPart>
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
                <CustomButton
                    $padding={[8, 0]}
                    $size={["100%", "auto"]}
                    $rounded={8}
                    $background="var(--content-third)"
                    $weight={500}
                    $animation="background"
                    $animationvalue="var(--content-fourth)"
                >
                    Загрузить скин
                </CustomButton>
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