import { Container, Content, Subtitle, Title, Titles } from "@/ui/intro-defaults";
import { Copied, Element, Header, IpBg, IpContainer, IpContent, IpTitle, Paragraph, StartLink, UnderIp, Version } from "./style";
import { CustomButton, CustomLink } from "@/ui/custom-button";
import { Copy, Share } from '@icon-park/react';
import { useState } from "react";

export default function Start() {
    const [copied, setCopied] = useState<boolean>(false);

    const copy = () => {
        setCopied(true);
        navigator.clipboard.writeText("play.euko.land")
        setTimeout(() => setCopied(false), 3000)
    }

    return(
        <Container id="start">
            <Content>
                <Titles>
                    <Title>
                        Как начать <span>играть</span>?
                    </Title>
                    <Subtitle>
                        Получи доступ и присоединяйся к сообществу
                    </Subtitle>
                </Titles>
                <Element>
                    <Header>
                        💬 Шаг 1: Присоединяйся к Discord
                    </Header>
                    <Paragraph>
                        Вступай в наше сообщество — это обязательный шаг для всех игроков
                    </Paragraph>
                    <CustomLink 
                        to={"https://discord.gg/tQaSUCWT83"} 
                        $padding={[8, 16]} 
                        $rounded={8} 
                        $outline="2px solid rgba(255, 255, 255, .3)"
                        $gap={8}
                        $animation="scale/outline"
                        $animationvalue="var(--red)"
                    >
                        Присоединиться <Share theme="outline" size="16" fill="inherit"/>
                    </CustomLink>
                </Element>
                <Element>
                    <Header>
                        📝 Шаг 2: Получи проходку
                    </Header>
                    <Paragraph>
                        Подай заявку на <StartLink to="euko.land/start">euko.land/start</StartLink> или купи доступ за 129₽ (скидка 50% для опытных игроков)
                    </Paragraph>
                </Element>
                <Element>
                    <Header>
                        🎮 Шаг 3: Подключайся и играй
                    </Header>
                    <Paragraph>
                        Скачай мод для авторизации из личного кабинета и подключайся к серверу:
                    </Paragraph>
                    <IpContainer>
                        <IpBg />
                        <IpContent>
                            <IpTitle>IP:</IpTitle>
                            <h5>play.euko.land</h5>
                            <CustomButton 
                                onClick={copy}
                                style={{
                                    position: `absolute`,
                                    right: `16px`
                                }}
                                $background="transparent"
                                $padding={[10, 10]}
                                $rounded={8}
                                $animation="scale/background"
                                $animationvalue="var(--red)"
                                $animationvalue2="var(--content)"
                                $stroke="rgba(255, 255, 255, .6)"
                            >
                                <Copy style={{ width: `20px`, height: `20px`}} theme="outline" size="20" fill="inherit"/>
                            </CustomButton>
                        </IpContent>
                    </IpContainer>
                    <UnderIp>
                        <Version>Версия: 1.21.x</Version>
                        <Copied $visibal={copied}>✓ Скопировано!</Copied>
                    </UnderIp>
                </Element>
            </Content>
        </Container>
    )
}