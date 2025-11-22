import type { ISanction } from "@/lib/types/sanctions";
import { AccessSanctions, AccessSanctionsTitle, ActiveBar, Container, Content, Data, DataElement, DataValue, ExpiredBar, Header } from "./styles";
import Moderator from "../moderator";
import AccessSanction from "../access-sanction";

const dataTitles = ['Причина', 'Выдано', 'Длительность', 'Истекает'];

export default function Sanction({ 
                                    character, 
                                    duration,
                                    expired,
                                    expires,
                                    issued,
                                    moderator,
                                    reason,
                                    sanctions 
                                }: ISanction) {
        return (
            <Container>
                <Header $color={ character === 'all' ? 'red' : 'yellow' }>
                    { character === 'all' ? 'Все персонажи' : `Персонаж: ${character}` }
                    <ActiveBar>
                        Активно
                    </ActiveBar>
                </Header>
                <Content>
                    <Data>  
                        { [reason, duration, issued, expires].map((el, index) => 
                            <DataElement key={index}>
                                <h6> {dataTitles[index]} </h6>
                                <DataValue>
                                    { el } 
                                    { expired && index === 3 && <ExpiredBar>Истекло</ExpiredBar>}
                                </DataValue>
                            </DataElement>
                        )}
                    </Data>
                    <Moderator {...moderator} />
                    <AccessSanctions>
                        <AccessSanctionsTitle>
                            Ограничения доступа:
                        </AccessSanctionsTitle>
                        {
                            sanctions.map((el, index) => <AccessSanction key={index} {...el} />)
                        }
                    </AccessSanctions>
                </Content>
            </Container>
        )
}