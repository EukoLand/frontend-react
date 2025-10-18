import { Container, Content, Subtitle, Title, Titles } from "@/ui/intro-defaults";
import { Element, ElementHeader, ElementImage, ElementImgContainer, ElementParagraph, ElementText } from "./style";

interface Element {
    title: string;
    text: string;
    image: string;
}

const elements: Element[] = [
    {
        title: '⚖️ Сбалансированный геймплей',
        text: 'Никакого читерского прогресса за пару часов. Починка стала редкостью, незерит требует усилий, а каждое достижение имеет реальную ценность.',
        image: '/balance.png'
    },
    {
        title: '💎 Честный донат',
        text: 'Только косметика, никаких преимуществ. Все игроки в равных условиях — побеждает skill, а не размер кошелька.',
        image: '/donate.png'
    },
    {
        title: '⚡ Техническая стабильность',
        text: 'Работаем на Folia — продвинутой платформе с высокой производительностью. Никаких лагов даже при большом онлайне.',
        image: '/stability.png'
    }
]

export default function Why() {
    return(
        <Container>
            <Content>
                <Titles>
                    <Title>
                        Почему <span>EukoLand</span>? 
                    </Title>
                    <Subtitle>
                        Мы создали сервер, где каждая деталь продумана для комфортной игры
                    </Subtitle>
                </Titles>
                {
                    elements.map((el, index) => 
                        <Element $reverced={index%2 === 1} key={index}>
                            <ElementText>
                                <ElementHeader>
                                    {el.title}
                                </ElementHeader>
                                <ElementParagraph>
                                    {el.text}
                                </ElementParagraph>
                            </ElementText>
                            <ElementImgContainer>
                                <ElementImage draggable="false" src={el.image} />
                            </ElementImgContainer>
                        </Element>
                    )
                }
            </Content>
        </Container>
    )
}