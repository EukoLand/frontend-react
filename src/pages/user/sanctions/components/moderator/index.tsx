import type { IModer } from "@/types/moderators";
import { Container, Nickname, Role, Skin, Text } from "./styles";

export default function Moderator({ image, role, username }: IModer) {
    return(
        <Container>
            <Skin src={image} />
            <Text>
                <Role>
                    { role }
                </Role>
                <Nickname>
                    { username }
                </Nickname>
            </Text>
        </Container>
    )
}