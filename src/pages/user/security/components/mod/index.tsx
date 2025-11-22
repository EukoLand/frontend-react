import { FiDownload } from "react-icons/fi";
import { Buttons, Container, DownloadContainer, Header, Paragraph, Support, SupportTitle, Text, Warning, WarningContent, WarningText, WarningTitle } from "./styled";
import { CustomButton } from "@/ui/custom-button";
import { useState } from "react";
import Modal from "@/ui/modal";
import { PiWarningBold } from "react-icons/pi";
import Selector from "./components/selector";
import getOwnMod from "@/lib/queries/security/getOwnMod";

export default function Mod() {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const [value, setValue] = useState<string | null>(null);

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
    
    const onChange = (type: string) => {
        setValue(type);
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
            <Modal overflow="initial" open={open} onClose={onClose} anim={anim} block={block} label="Скачать мод EukoAuth">
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
                    <Selector value={value} onChange={onChange} modelOpened={open} />
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
                        disabled={value === null}
                        onClick={() => {
                            if(value === null) return;
                            close();
                            getOwnMod(value);
                        }}
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