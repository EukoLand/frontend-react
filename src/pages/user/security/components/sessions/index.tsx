import type { ISession } from "./session";
import Session from "./session";
import { Container, Header } from "./styles";

const data: ISession[] = [
    {
        id: '1',
        created: '01.10.2025, 14:30',
        device: 'Windows 11',
        last: '02.10.2025',
    },
    {
        id: '2',
        created: '15.09.2025, 09:20',
        device: 'Linux Ubuntu',
        last: '20.09.2025',
    }
]

export default function Sessions() {
    return(
        <Container>
            <Header>
                Активные ключи модов
            </Header>
            {
                data.map(el => 
                            <Session 
                                id={el.id}
                                key={el.id}
                                created={el.created}
                                device={el.device}
                                last={el.last}
                            />
                )
            }
        </Container>
    )
}