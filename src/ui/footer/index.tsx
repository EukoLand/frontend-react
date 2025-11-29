import { FaDiscord, FaTelegram } from "react-icons/fa";
import { Column, ColumnLink, ColumnList, ColumnText, ColumnTitle, Container, Content, Line, Links, Logo, SubContent, SubLogo, SubText } from "./styled";

const links: {[keyof: string]: string} = {
    "https://eukoland.gitbook.io/docs/dokumenty/polzovatelskoe-soglashenie": "Пользовательское соглашение",
    "https://eukoland.gitbook.io/docs/dokumenty/politika-konfidencialnosti": "Политика конфиденциальности",
    "https://eukoland.gitbook.io/docs/dokumenty/politika-vozvrata-sredstv": "Политика возврата средств",
    "https://eukoland.gitbook.io/docs/dokumenty/usloviya-oplaty": "Условия оплаты",
}

export default function Footer() {
    return(
        <Container>
            <Content>
                <Links>
                    <Column>
                        <ColumnTitle>
                            <Logo>
                                <span>Euko</span>
                                <span style={{ color: "var(--red)" }}>Land</span>
                            </Logo>
                        </ColumnTitle>
                        <SubLogo>
                            Полу-ванильный сервер Minecraft с продуманным балансом и дружелюбным сообществом.
                        </SubLogo>
                    </Column>
                    <Column>
                        <ColumnTitle>Документы</ColumnTitle>
                        <ColumnList>
                            {
                                Object.keys(links).map((el, index) => <ColumnLink key={index} href={el} target="_blank">{links[el]}</ColumnLink>)
                            }
                        </ColumnList>
                    </Column>
                    <Column>
                        <ColumnTitle>Контакты</ColumnTitle>
                        <ColumnList>
                            <ColumnLink $social href="https://discord.com/invite/tQaSUCWT83" target="_blank">
                                <FaDiscord style={{ transform: `translateY(2px)`, stroke: 'inherit' }} />
                                Discord сервер
                            </ColumnLink>
                            <ColumnLink $social href="https://t.me/eukoland" target="_blank">
                                <FaTelegram style={{ transform: `translateY(2px)`, stroke: 'inherit' }} />
                                Telegram канал
                            </ColumnLink>
                            <ColumnText>
                                Email: euko.land@gmail.com
                            </ColumnText>
                        </ColumnList>
                    </Column>
                </Links>
                <Line />
                <SubContent>
                    <SubText>
                        © 2025 EukoLand. Все права защищены.
                    </SubText>
                    <SubText>
                        EukoLand is not an official product of Mojang Studios and is not<br />
                        affiliated with Mojang Studios or Microsoft.
                    </SubText>
                </SubContent>
            </Content>
        </Container>
    )
}