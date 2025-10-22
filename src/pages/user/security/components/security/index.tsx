import { CustomButton } from "@/ui/custom-button";
import { Block, Blocks, Container, Header, ModalButtons, ModalText, Paragraph, Switch, SwitchBtn, SwitchThumb, Text, Title } from "./styles";
import { useState } from "react";
import Modal from "@/ui/modal";

export default function SecuritySettings() {
    const [twoAuth, setTwoAuth] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);

    const onOpen = () => {
        setBlock(true);
        setOpen(true)
        setTimeout(() => setBlock(false), 1100)
    }

    const onClose = () => {
        setBlock(true)
        setAnim(true)
        setTimeout(() => {
            setOpen(false)
            setAnim(false)
            setBlock(false)
        }, 950)
    }
    
    return(
        <Container>
            <Header>
                Настройки безопасности
            </Header>
            <Blocks>
                <Block>
                    <Text>
                        <Title>
                            Блокировка входа
                        </Title>
                        <Paragraph>
                            Временно заблокировать доступ к серверу для всех ключей
                        </Paragraph>
                    </Text>
                    <CustomButton
                        onClick={onOpen}
                        $animation="background"
                        $animationvalue="rgba(255, 255, 255, .5)"
                        $color="white"
                        $rounded={8}
                        $background="var(--content-fourth)"
                        $font={16}
                        $padding={[8, 16]}
                    >
                        Заблокировать
                    </CustomButton>
                    <Modal open={open} onClose={onClose} anim={anim} block={block} label="Заблокировать доступ?">
                        <ModalText>
                            Это временно заблокирует вход на сервер для всех ваших ключей. Вы не сможете подключиться до разблокировки. 
                        </ModalText>
                        <ModalButtons>
                            <CustomButton
                                onClick={onClose}
                                $rounded={8}
                                $animation="background"
                                $animationvalue="var(--content-fourth)"
                                $background="var(--content-third)"
                                $font={16}
                                $weight={500}
                                $fullOn={800}
                                $size={["calc(50% - 4px)", "auto"]}
                                $padding={[12, 16]}
                            >
                                Отмена
                            </CustomButton>
                            <CustomButton
                                $rounded={8}
                                $animation="background"
                                $animationvalue="rgba(var(--red-rgb), .5)"
                                $background="var(--red)"
                                $font={16}
                                $weight={500}
                                $fullOn={800}
                                $size={["calc(50% - 4px)", "auto"]}
                                $padding={[12, 16]}
                            >
                                Заблокировать
                            </CustomButton>
                        </ModalButtons>
                    </Modal>
                </Block>
                <Block>
                    <Text>
                        <Title>
                            Двухфакторная аутентификация
                        </Title>
                        <Paragraph>
                            Подтверждение входа через Discord при каждом подключении
                        </Paragraph>
                    </Text>
                    <Switch $on={twoAuth}>
                        <SwitchThumb $on={twoAuth} />
                        <SwitchBtn onClick={() => setTwoAuth(prev => !prev)}></SwitchBtn>
                    </Switch>
                </Block>
            </Blocks>
        </Container>
    )
}