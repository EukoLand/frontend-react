import { CustomButton } from "@/ui/custom-button";
import { Block, Blocks, Container, Header, ModalButtons, ModalText, Paragraph, Switch, SwitchBtn, SwitchThumb, Text, Title } from "./styles";
import { useEffect, useState } from "react";
import Modal from "@/ui/modal";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import blockJoining from "@/lib/queries/security/blockJoining";
import getBlockStatus from "@/lib/queries/security/getBlockStatus";

export default function SecuritySettings() {
    const client = useQueryClient();
    const { data } = useQuery({
        queryKey: ['blockStatus'],
        queryFn: getBlockStatus,
        placeholderData: keepPreviousData,
    })
    const { mutateAsync } = useMutation({
        mutationKey: ['blockMut'],
        mutationFn: blockJoining,
        onSettled: () => {
            client.invalidateQueries({
                queryKey: ['blockStatus']
            });
        },
    });
    useEffect(() => console.log(data), [data])
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
    
    const blockFn = async () => {
        onClose();
        setTimeout(() => {
            mutateAsync();
        }, 1000);
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
                        { data ? "Разблокировать" : "Заблокировать" }
                    </CustomButton>
                    <Modal 
                        open={open} 
                        onClose={onClose} 
                        anim={anim} 
                        block={block} 
                        label={data ? "Разблокировать доступ?" :  "Заблокировать доступ?"}
                    >
                        <ModalText>
                            { 
                                data 
                                ? "После разблокировки вы снова сможете заходить на сервер с активными ключами." 
                                :  "Это временно заблокирует вход на сервер для всех ваших ключей. Вы не сможете подключиться до разблокировки."
                            }
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
                                onClick={blockFn}
                                $rounded={8}
                                $animation="background"
                                $animationvalue={`${data ? "var(--content-third)" : "rgba(var(--red-rgb), .5)"}`}
                                $background={data ? "var(--content-fourth)" : "var(--red)"}
                                $font={16}
                                $weight={500}
                                $fullOn={800}
                                $size={["calc(50% - 4px)", "auto"]}
                                $padding={[12, 16]}
                            >
                                { data ? "Разблокировать" : "Заблокировать" }
                            </CustomButton>
                        </ModalButtons>
                    </Modal>
                </Block>
                {/* 
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
                 */}
            </Blocks>
        </Container>
    )
}