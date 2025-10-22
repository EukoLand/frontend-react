import { FiDownload } from "react-icons/fi";
import { Buttons, Container, DownloadContainer, Header, Paragraph, Support, SupportElement, SupportTitle, Text, Warning, WarningContent, WarningText, WarningTitle } from "./styled";
import { CustomButton } from "@/ui/custom-button";
import { useState } from "react";
import Modal from "@/ui/modal";
import { PiWarningBold } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";

export default function Mod() {
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
            <DownloadContainer>
                <FiDownload stroke="var(--red)" size={24} />
            </DownloadContainer>
            <Text>
                <Header>
                    Мод для авторизации (EukoAuth)
                </Header>
                <Paragraph>
                    Скачайте персональный мод для автоматической авторизации на сервере. Мод содержит уникальный ключ доступа и работает только для вашего аккаунта.
                </Paragraph>
                <CustomButton 
                    onClick={onOpen}
                    $padding={[8, 16]}
                    $background="var(--red)"
                    $font={14}
                    $weight={400}
                    $rounded={8}
                    $animation="background"
                    $animationvalue="rgba(var(--red-rgb), .7)"
                >
                    Скачать мод
                </CustomButton>
            </Text>
            <Modal open={open} onClose={onClose} anim={anim} block={block} label="Скачать мод EukoAuth">
                <Warning>
                    <PiWarningBold stroke="oklch(79.5% 0.184 86.047)" fill="oklch(79.5% 0.184 86.047)" size={24} />
                    <WarningContent>
                        <WarningTitle>
                            Важная информация о безопасности:
                        </WarningTitle>
                        <WarningText>
                            <li>Мод содержит персональный ключ доступа к вашему аккаунту</li>
                            <li><b>НИКОГДА</b> не передавайте мод другим игрокам</li>
                            <li>Передача мода равносильна передаче пароля от аккаунта</li>
                            <li>При потере мода деактивируйте ключ в личном кабинете</li>
                        </WarningText>
                    </WarningContent>
                </Warning>
                <Support>
                    <SupportTitle>
                        Мод будет работать на:
                    </SupportTitle>
                    <SupportElement>
                        <GrStatusGood 
                            size={24} 
                            stroke="var(--red)" 
                            fill="var(--red)" 
                        />
                        Minecraft 1.21.7 (Forge/Fabric)
                    </SupportElement>
                </Support>
                <Buttons>
                    <CustomButton
                        onClick={onClose}
                        $rounded={8}
                        $animation="background"
                        $animationvalue="var(--content-fourth)"
                        $background="var(--content-third)"
                        $font={16}
                        $weight={500}
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
                        $size={["calc(50% - 4px)", "auto"]}
                        $padding={[12, 16]}
                    >
                        Понимаю, скачать мод
                    </CustomButton>
                </Buttons>
            </Modal>
        </Container>
    )
}