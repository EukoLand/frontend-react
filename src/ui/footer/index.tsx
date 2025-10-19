import { FaDiscord, FaTelegram } from "react-icons/fa";
import { Column, ColumnLink, ColumnList, ColumnText, ColumnTitle, Container, Content, Line, Links, Logo, SubContent, SubLogo, SubText } from "./styled";

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
                            <ColumnLink to="/terms">Пользовательское соглашение</ColumnLink>
                            <ColumnLink to="/privacy">Политика конфиденциальности</ColumnLink>
                            <ColumnLink to="/refund">Политика возврата средств</ColumnLink>
                            <ColumnLink to="/payment">Условия оплаты</ColumnLink>
                        </ColumnList>
                    </Column>
                    <Column>
                        <ColumnTitle>Контакты</ColumnTitle>
                        <ColumnList>
                            <ColumnLink $social to="https://discord.com/invite/tQaSUCWT83">
                                <FaDiscord style={{ transform: `translateY(2px)`, stroke: 'inherit' }} />
                                Discord сервер
                            </ColumnLink>
                            <ColumnLink $social to="https://t.me/eukoland">
                                <FaTelegram style={{ transform: `translateY(2px)`, stroke: 'inherit' }} />
                                Telegram канал
                            </ColumnLink>
                            <ColumnText>
                                Email: support@euko.land
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