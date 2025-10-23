import { PiWarningBold } from "react-icons/pi";
import { Block } from "../../styles";
import { Explanation, Level, LevelCircle, Top, Warning, WarningContainer, WarningDescription, WarningText, WarningTitle } from "./styles";

const level = 1

export default function Rating() {
    return(
        <Block>
            <Top>
                <WarningContainer>
                    <Warning>
                        <PiWarningBold stroke="oklch(79.5% 0.184 86.047)" fill="oklch(79.5% 0.184 86.047)" size={24} />
                    </Warning>
                    <WarningText>
                        <WarningTitle>
                            Рейтинг аккаунта
                        </WarningTitle>
                        <WarningDescription>
                            Система предупреждений за нарушения правил
                        </WarningDescription>
                    </WarningText>
                </WarningContainer>
                <Level>
                    {[...Array(3)].map((_, index) => <LevelCircle key={index} $red={index+1===level} />)}
                    {level}/3
                </Level>
            </Top>
            <Explanation>
                <b>Внимание:</b> При достижении 3 предупреждений все твинки будут заблокированы и вы потеряете возможность создавать новые дополнительные аккаунты. 
            </Explanation>
        </Block>
    )
}