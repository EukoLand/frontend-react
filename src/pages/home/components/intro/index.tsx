import Logo from "@/ui/logo";
import { 
    Background, 
    Buttons, 
    Container, 
    Content, 
    Description, 
    Subtitle, 
    Titles
} from "./style";
import { CustomAnchor } from "@/ui/custom-button";

export default function Intro() {
    return(
        <Container>
            <Background />
            <Content>
                <Titles>
                    <Logo size={96} />
                    <Subtitle>Полу-ванильный сервер Minecraft </Subtitle>
                </Titles>
                <Description>
                    Сбалансированный геймплей, дружелюбное сообщество и честный донат. Присоединяйся к игрокам, которые ценят качество. 
                </Description>
                <Buttons>
                    <CustomAnchor 
                        href="#start"
                        $padding={[16, 32]}
                        $font={18} 
                        $weight={600} 
                        $lineheight={32} 
                        $background="var(--red)" 
                        $animation="scale"
                    >
                        Начать играть
                    </CustomAnchor>
                    <CustomAnchor 
                        $padding={[16, 32]} 
                        $font={18} 
                        $weight={600} 
                        $lineheight={32} 
                        $background="none" 
                        $animation="outline"
                        $animationvalue="var(--red)"
                        $outline="2px solid rgba(255, 255, 255, 0.3)"
                    >
                        Узнать больше
                    </CustomAnchor>
                </Buttons>
            </Content>
        </Container>
    )
}