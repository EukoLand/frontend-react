import type { IExpiredSanction } from "@/lib/types/sanctions";
import { 
    Bar, 
    Bars, 
    Container, 
    Content, 
    Data, 
    Sanction, 
    Sanctions, 
    SanctionsList, 
    SanctionTitle, 
    Skin, 
    Title, 
    Element, 
    ElementTitle, 
    ElementValue, 
    Line 
} from "./styles";

export default function Punishment({ 
                                        character, 
                                        image,
                                        duration, 
                                        expired, 
                                        expires, 
                                        issued, 
                                        moderator, 
                                        reason, 
                                        sanctions 
                                    }: IExpiredSanction) {
    return(
        <Container>
            <Skin src={image} />
            <Content>
                <Bars>
                    <Bar $color={character === 'all' ? 'red' : 'yellow'}>
                        { character === 'all' ? 'Все персонажи' : `Персонаж: ${character}`}
                    </Bar>
                    <Bar $color="gray">{ duration }</Bar>
                    { expired && <Bar $color="green">Истекло</Bar> }
                </Bars>
                <Title>
                    { reason }
                </Title>
                <Sanctions>
                    <SanctionTitle>
                        Ограничения:
                    </SanctionTitle>
                    <SanctionsList>
                        {
                            sanctions.map((el, index) => <Sanction key={index}>{ el }</Sanction>)
                        }
                    </SanctionsList>
                </Sanctions>
                <Data>
                    <Element>
                        <ElementTitle>
                            Модератор:
                        </ElementTitle>
                        <ElementValue>
                            { moderator }
                        </ElementValue>
                    </Element>
                    <Line />
                    <Element>
                        <ElementTitle>
                            Выдано: 
                        </ElementTitle>
                        <ElementValue>
                            { issued }
                        </ElementValue>
                    </Element>
                    <Line />
                    <Element>
                        <ElementTitle>
                            Истекло: 
                        </ElementTitle>
                        <ElementValue>
                            { expires }
                        </ElementValue>
                    </Element>
                </Data>
            </Content>
        </Container>
    )
}