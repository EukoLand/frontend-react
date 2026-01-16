import Logo from "@/ui/logo";
import { 
    Background, 
    Button, 
    Buttons, 
    Container, 
    Content, 
    Description, 
    Subtitle, 
    Titles
} from "./style";

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
                    <Button 
                        href="#start"
                        $padding={[16, 32]}
                        $font={18} 
                        $weight={600} 
                        $lineheight={32} 
                        $background="var(--red)" 
                        $animation="scale"
                    >
                        Начать играть
                    </Button>
                    <Button 
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
                    </Button>
                </Buttons>
            </Content>
        </Container>
    )
}